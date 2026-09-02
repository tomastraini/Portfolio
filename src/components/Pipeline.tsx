import { useEffect, useRef, useState } from 'react';
import { FiLock, FiRotateCcw } from 'react-icons/fi';

interface Stage {
  key: string;
  title: string;
  body: string;
  /** Stages a clinical trial manager has to sign before the next one opens. */
  gated?: boolean;
}

const stages: Stage[] = [
  {
    key: 'in',
    title: 'Recording',
    body: 'Audio is uploaded once and never replaced. Everything downstream refers back to it.',
  },
  {
    key: 'asr',
    title: 'Machine draft',
    body: 'Azure Fast Transcription returns word-level timestamps, speaker turns and a detected language. That becomes Draft 1.',
  },
  {
    key: 'T1',
    title: 'Transcription',
    body: 'Reviewers work on private drafts. They split and merge sentences, rename speakers, and fix what the machine misheard, while the audio stays in sync word for word.',
    gated: true,
  },
  {
    key: 'T2',
    title: 'Translation',
    body: 'Deriving a translation freezes a byte-exact copy of the locked source, seeds a machine draft, then reviewers go sentence by sentence.',
    gated: true,
  },
  {
    key: 'C',
    title: 'Coding',
    body: 'Text is frozen here. Coders add annotations only, anchored to sentence spans against the project codebook.',
    gated: true,
  },
];

export function Pipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`pipeline${seen ? ' is-in' : ''}`}
      ref={ref}
      aria-labelledby="pipeline-title"
    >
      <h4 className="pipeline__title" id="pipeline-title">
        How one interview moves through it
      </h4>

      <ol className="pipeline__stages">
        {stages.map((stage, i) => (
          <li
            className="pipeline__stage"
            key={stage.key}
            style={{ '--i': i } as React.CSSProperties}
          >
            <div className="pipeline__node">
              <span className="pipeline__key">{stage.key}</span>
              {stage.gated ? (
                <span className="pipeline__lock" title="Signed off by the trial manager">
                  <FiLock aria-hidden="true" />
                  <span className="visually-hidden">
                    Signed off by the trial manager before the next stage opens
                  </span>
                </span>
              ) : null}
            </div>
            <h5>{stage.title}</h5>
            <p>{stage.body}</p>
          </li>
        ))}
      </ol>

      <p className="pipeline__loop">
        <FiRotateCcw aria-hidden="true" />
        Re-lock the source and only the sentences that actually changed get
        re-translated. Everything a human already reviewed carries forward
        untouched.
      </p>

      <p className="pipeline__substrate">
        Underneath all five: every published change is a commit, an append-only
        log row and a named reviewer. Each lock is a signed tag, and nobody can
        sign their own.
      </p>
    </div>
  );
}
