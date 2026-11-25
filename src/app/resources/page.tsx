'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Download, 
  Eye, 
  Search, 
  Filter, 
  X, 
  Sparkles, 
  BookOpen, 
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { PAST_PAPERS_ARCHIVE, PastPaperResource } from '@/lib/resourcesData';
import { ACADEMY_CONFIG } from '@/lib/academyData';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedComponent, setSelectedComponent] = useState('ALL');
  const [selectedLevel, setSelectedLevel] = useState('ALL');
  const [selectedYear, setSelectedYear] = useState('ALL');
  const [previewPaper, setPreviewPaper] = useState<PastPaperResource | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPreviewPaper(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter papers
  const filteredPapers = useMemo(() => {
    return PAST_PAPERS_ARCHIVE.filter((paper) => {
      const matchesSearch = 
        paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.variant.includes(searchQuery) ||
        paper.paperNumber.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesComponent = selectedComponent === 'ALL' || paper.paperNumber === selectedComponent;
      const matchesLevel = selectedLevel === 'ALL' || paper.level === selectedLevel;
      const matchesYear = selectedYear === 'ALL' || paper.year === selectedYear;

      return matchesSearch && matchesComponent && matchesLevel && matchesYear;
    });
  }, [searchQuery, selectedComponent, selectedLevel, selectedYear]);

  return (
    <div className="min-h-screen bg-[#fafafa] text-ink-black-900 pb-20">
      
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-alice-blue-50/70 via-white to-[#fafafa] pt-12 pb-14 border-b border-sand-dune-200">
        <div className="absolute inset-0 bio-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-96 bg-gradient-to-tr from-blue-300/25 via-pine-teal-300/20 to-blue-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sand-dune-200 text-pine-teal-700 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
            <Sparkles className="w-4 h-4 text-dark-wine-600 animate-pulse" />
            <span>Cambridge Assessment International Education Material Archive</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-ink-black-900 font-heading">
            Biology Resources &{' '}
            <span className="bg-gradient-to-r from-dark-wine-800 via-pine-teal-700 to-dark-wine-700 bg-clip-text text-transparent">
              Past Papers Library
            </span>
          </h1>

          <p className="text-base sm:text-lg text-ink-black-700 max-w-3xl mx-auto leading-relaxed">
            Access authentic Cambridge Biology past examination papers directly inside your browser. 
            Read, analyze, and practice without leaving the website or getting redirected.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="space-y-8">
          
          {/* Search and Filter Control Bar */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-sand-dune-200 shadow-xs space-y-4">
            
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Search Box */}
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-ink-black-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by paper code, variant (e.g. 42, 21)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-sand-dune-200 bg-alice-blue-50/50 text-ink-black-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pine-teal-600 focus:bg-white transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-black-600 hover:text-ink-black-900"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Filter Controls */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <div className="flex items-center gap-1.5 text-xs text-ink-black-700 mr-1">
                  <Filter className="w-3.5 h-3.5 text-pine-teal-700" />
                  <span className="font-semibold">Filter:</span>
                </div>

                {/* Component Filter */}
                <select
                  value={selectedComponent}
                  onChange={(e) => setSelectedComponent(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-sand-dune-200 bg-white text-xs font-semibold text-ink-black-800 focus:outline-none focus:ring-2 focus:ring-pine-teal-600"
                >
                  <option value="ALL">All Papers</option>
                  <option value="Paper 1">Paper 1 (MCQ)</option>
                  <option value="Paper 2">Paper 2 (AS Structured)</option>
                  <option value="Paper 3">Paper 3 (Practical)</option>
                  <option value="Paper 4">Paper 4 (A Level Structured)</option>
                </select>

                {/* Level Filter */}
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-sand-dune-200 bg-white text-xs font-semibold text-ink-black-800 focus:outline-none focus:ring-2 focus:ring-pine-teal-600"
                >
                  <option value="ALL">All Levels</option>
                  <option value="AS Level">AS Level</option>
                  <option value="A2 Level">A2 Level</option>
                </select>

                {/* Year Filter */}
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-sand-dune-200 bg-white text-xs font-semibold text-ink-black-800 focus:outline-none focus:ring-2 focus:ring-pine-teal-600"
                >
                  <option value="ALL">All Years</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
              </div>

            </div>

            {/* Quick filter pills */}
            <div className="pt-2 border-t border-sand-dune-200 flex flex-wrap items-center justify-between text-xs text-ink-black-700 gap-2">
              <span>
                Showing <strong>{filteredPapers.length}</strong> of {PAST_PAPERS_ARCHIVE.length} examination papers
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-ink-black-600">Quick views:</span>
                <button 
                  onClick={() => { setSelectedComponent('Paper 1'); setSelectedLevel('ALL'); }}
                  className="px-2.5 py-1 rounded-lg bg-sand-dune-100 hover:bg-pine-teal-50 hover:text-pine-teal-700 transition-colors font-medium text-[11px]"
                >
                  Paper 1 MCQ
                </button>
                <button 
                  onClick={() => { setSelectedComponent('Paper 2'); setSelectedLevel('ALL'); }}
                  className="px-2.5 py-1 rounded-lg bg-sand-dune-100 hover:bg-pine-teal-50 hover:text-pine-teal-700 transition-colors font-medium text-[11px]"
                >
                  Paper 2 AS
                </button>
                <button 
                  onClick={() => { setSelectedComponent('Paper 3'); setSelectedLevel('ALL'); }}
                  className="px-2.5 py-1 rounded-lg bg-sand-dune-100 hover:bg-pine-teal-50 hover:text-pine-teal-700 transition-colors font-medium text-[11px]"
                >
                  Paper 3 Practical
                </button>
                <button 
                  onClick={() => { setSelectedComponent('Paper 4'); setSelectedLevel('ALL'); }}
                  className="px-2.5 py-1 rounded-lg bg-sand-dune-100 hover:bg-pine-teal-50 hover:text-pine-teal-700 transition-colors font-medium text-[11px]"
                >
                  Paper 4 A2
                </button>
                {(selectedComponent !== 'ALL' || selectedLevel !== 'ALL' || selectedYear !== 'ALL' || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedComponent('ALL');
                      setSelectedLevel('ALL');
                      setSelectedYear('ALL');
                      setSearchQuery('');
                    }}
                    className="px-2.5 py-1 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors font-semibold text-[11px]"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* Grid of Papers */}
          {filteredPapers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPapers.map((paper) => {
                const isPaper4 = paper.paperNumber === 'Paper 4';
                const isPaper3 = paper.paperNumber === 'Paper 3';
                const isPaper2 = paper.paperNumber === 'Paper 2';

                return (
                  <div
                    key={paper.id}
                    className="bg-white rounded-2xl border border-sand-dune-200 p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Header Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${
                          isPaper4 
                            ? 'bg-blue-100 text-blue-900 border border-blue-200' 
                            : isPaper3
                            ? 'bg-amber-100 text-amber-900 border border-amber-200'
                            : isPaper2
                            ? 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                            : 'bg-pine-teal-100 text-pine-teal-900 border border-pine-teal-200'
                        }`}>
                          {paper.paperNumber} • Var {paper.variant}
                        </span>

                        <span className="text-[11px] font-semibold text-ink-black-700 bg-sand-dune-100 px-2.5 py-0.5 rounded-full">
                          {paper.level}
                        </span>
                      </div>

                      {/* Paper Title */}
                      <h3 className="text-sm font-bold text-ink-black-900 font-heading group-hover:text-pine-teal-700 transition-colors line-clamp-2">
                        {paper.title}
                      </h3>

                      {/* Metadata Details */}
                      <div className="mt-3 py-2.5 border-t border-b border-sand-dune-200 grid grid-cols-2 gap-2 text-xs text-ink-black-700">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-ink-black-600 block">Series</span>
                          <span className="font-semibold text-ink-black-900">{paper.session} {paper.year}</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-ink-black-600 block">Syllabus</span>
                          <span className="font-semibold text-ink-black-900">Cambridge 9700</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-ink-black-600 mt-2 font-mono truncate">
                        {paper.filename}
                      </p>
                    </div>

                    {/* Tactile Action Buttons */}
                    <div className="mt-5 pt-3 border-t border-sand-dune-200 flex items-center gap-2">
                      <button
                        onClick={() => setPreviewPaper(paper)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-dark-wine-800 to-pine-teal-700 hover:opacity-95 shadow-xs active:scale-[0.98] transition-all"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Online</span>
                      </button>

                      <a
                        href={paper.downloadUrl}
                        download={paper.filename}
                        title="Download PDF directly"
                        className="inline-flex items-center justify-center p-2.5 rounded-xl font-semibold text-xs text-ink-black-800 bg-sand-dune-100 hover:bg-sand-dune-200 border border-sand-dune-200 active:scale-[0.98] transition-all"
                      >
                        <Download className="w-3.5 h-3.5 text-pine-teal-700" />
                      </a>
                    </div>

                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-sand-dune-200 p-12 text-center space-y-4">
              <BookOpen className="w-12 h-12 text-ink-black-600 mx-auto" />
              <h3 className="text-lg font-bold text-ink-black-900 font-heading">
                No past papers match your active filter
              </h3>
              <p className="text-xs sm:text-sm text-ink-black-700 max-w-md mx-auto">
                Try clearing your search query or reset filters to display all Cambridge Biology examination papers.
              </p>
              <button
                onClick={() => {
                  setSelectedComponent('ALL');
                  setSelectedLevel('ALL');
                  setSelectedYear('ALL');
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-dark-wine-800 hover:bg-dark-wine-900 shadow-xs"
              >
                <span>Reset All Filters</span>
              </button>
            </div>
          )}

        </div>
      </main>

      {/* In-Page PDF Viewer Modal (User NEVER leaves the website) */}
      {previewPaper && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink-black-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setPreviewPaper(null)}
        >
          <div 
            className="relative w-full max-w-5xl h-[90vh] bg-white rounded-3xl shadow-2xl border border-sand-dune-300 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-4 sm:px-6 bg-gradient-to-r from-dark-wine-900 via-dark-wine-800 to-[#153e5c] text-white flex items-center justify-between border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-3 truncate pr-4">
                <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-blue-200 flex-shrink-0">
                  <FileText className="w-5 h-5 text-blue-200" />
                </div>
                <div className="truncate">
                  <h3 className="text-xs sm:text-sm font-bold text-white font-heading truncate">
                    {previewPaper.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] text-blue-200 mt-0.5">
                    <span>{previewPaper.paperNumber}</span>
                    <span>•</span>
                    <span>Variant {previewPaper.variant}</span>
                    <span>•</span>
                    <span>{previewPaper.session} {previewPaper.year}</span>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={previewPaper.downloadUrl}
                  download={previewPaper.filename}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all border border-white/20"
                  title="Direct Download"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>

                <button
                  onClick={() => setPreviewPaper(null)}
                  className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all ml-1"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Frame */}
            <div className="relative flex-1 bg-sand-dune-100 w-full h-full">
              <iframe
                src={previewPaper.previewUrl}
                className="w-full h-full border-0"
                title={previewPaper.title}
                allow="autoplay"
              />
            </div>

            {/* Modal Bottom Footer */}
            <div className="px-6 py-2.5 bg-white border-t border-sand-dune-200 flex items-center justify-between text-xs text-ink-black-700 flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Reading in-page • Cambridge Assessment International Education Material</span>
              </div>
              <button
                onClick={() => setPreviewPaper(null)}
                className="font-bold text-pine-teal-700 hover:text-dark-wine-800"
              >
                Close Viewer [Esc]
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Academic Assistance CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-3xl bg-gradient-to-br from-[#0c2340] via-[#153e5c] to-[#35605A] text-white p-8 sm:p-12 border border-blue-400/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Expert Examination Mentorship</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Struggling with Past Paper Mark Schemes & Keywords?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Join hCG Biology Academy to learn systematic mark-scheme deconstruction, examiner command-word decoding, and topical question drills under an MS Zoology Gold Medalist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">
            <Link
              href="/admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-dark-wine-900 bg-white hover:bg-slate-100 shadow-md transition-all active:scale-[0.98]"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4 text-dark-wine-900" />
            </Link>

            <a
              href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=Hello%20hCG%20Biology%20Academy,%20I%20have%20a%20question%20about%20past%20papers%20and%20classes.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-300" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
