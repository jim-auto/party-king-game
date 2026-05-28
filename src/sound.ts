type SfxKind = 'tap' | 'roll' | 'ssr' | 'legend' | 'toggle';

let audioContext: AudioContext | null = null;

function getAudioContext() {
  audioContext ??= new AudioContext();
  return audioContext;
}

function tone(context: AudioContext, frequency: number, start: number, duration: number, gain: number, type: OscillatorType = 'sine') {
  const oscillator = context.createOscillator();
  const volume = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  volume.gain.setValueAtTime(0.0001, start);
  volume.gain.exponentialRampToValueAtTime(gain, start + 0.012);
  volume.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(volume).connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

export function playSfx(kind: SfxKind, enabled: boolean) {
  if (!enabled) return;
  try {
    const context = getAudioContext();
    const now = context.currentTime;

    if (kind === 'tap') {
      tone(context, 620, now, 0.055, 0.04, 'triangle');
    }

    if (kind === 'toggle') {
      tone(context, 440, now, 0.06, 0.035, 'square');
      tone(context, 740, now + 0.045, 0.075, 0.028, 'triangle');
    }

    if (kind === 'roll') {
      [260, 390, 520, 780].forEach((frequency, index) => {
        tone(context, frequency, now + index * 0.045, 0.09, 0.035, 'sawtooth');
      });
    }

    if (kind === 'ssr') {
      [392, 523, 659, 988].forEach((frequency, index) => {
        tone(context, frequency, now + index * 0.06, 0.16, 0.04, 'triangle');
      });
      tone(context, 1320, now + 0.27, 0.28, 0.03, 'sine');
    }

    if (kind === 'legend') {
      [220, 330, 440, 660, 880, 1320].forEach((frequency, index) => {
        tone(context, frequency, now + index * 0.055, 0.22, 0.045, index % 2 ? 'triangle' : 'sawtooth');
      });
      tone(context, 1760, now + 0.42, 0.32, 0.035, 'sine');
    }
  } catch {
    // Browser audio can be blocked; game flow should continue silently.
  }
}

export function vibrate(pattern: number | number[]) {
  if ('vibrate' in navigator) {
    navigator.vibrate(pattern);
  }
}
