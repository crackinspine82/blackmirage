'use client';

import { motion } from 'framer-motion';
import OrigamiTerrainBackground from '../three/OrigamiTerrainBackground';

interface QAItem {
  q: string;
  a: string;
}

interface ProblemStatementProps {
  title: string;
  statement: string;
  qa: QAItem[];
}

import React, { useState } from 'react';

function CollapsibleQA({ question, answer, isLast, open, onClick }: { question: string; answer: string; isLast?: boolean; open: boolean; onClick: () => void }) {
  const [height, setHeight] = useState(0);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  return (
    <div className="">
      <button
        className="w-full flex items-start gap-2 px-0 py-4 text-left text-black focus:outline-none focus:ring-2 focus:ring-orange-500 group bg-transparent border-none shadow-none"
        style={{ background: 'none', boxShadow: 'none', border: 'none' }}
        onClick={onClick}
        aria-expanded={open}
      >
        <span
          className={
            'text-2xl md:text-3xl transition-transform duration-200 mt-1' +
            (open ? ' text-orange-600 rotate-45' : ' text-orange-500')
          }
          style={{ minWidth: '1.5em', textAlign: 'center' }}
        >
          +
        </span>
        <span className="flex-1 text-xl font-light pl-4">{question}</span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? height : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        aria-hidden={!open}
      >
        <div className="flex-1 pb-4 text-black/90 text-lg font-light pl-4">
          {answer}
        </div>
      </div>
      {!isLast && (
        <div className="border-t border-orange-200 mt-2 mb-2 mx-2" />
      )}
    </div>
  );
}

export default function ProblemStatement({ title, statement, qa }: ProblemStatementProps) {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white">
      {/* 3D Origami Terrain Animated Background */}
      <OrigamiTerrainBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          {/* Left Column - Problem Statement */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-8">
              {title}
            </h2>
            <div className="text-2xl md:text-3xl font-medium text-black mb-6">
              {statement}
            </div>
          </div>

          {/* Right Column - Collapsible Q&A */}
          <div className="text-lg text-black/80 space-y-0">
            {qa.map((item, idx, arr) => (
              <CollapsibleQA
                key={idx}
                question={item.q}
                answer={item.a}
                isLast={idx === arr.length - 1}
                open={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
