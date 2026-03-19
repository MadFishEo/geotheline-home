'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function QuickConsultForm() {
  const t = useTranslations('home');
  const ft = useTranslations('form');
  const [form, setForm] = useState({ name: '', phone: '', procedure: '', doctor: '', agree: false });
  const [submitted, setSubmitted] = useState(false);

  const procedures = ft.raw('procedures') as string[];
  const doctors = ft.raw('doctors') as string[];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agree) return alert(ft('privacyAlert'));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-14">
        <div className="w-14 h-14 border border-[#b8965a]/30 flex items-center justify-center mx-auto mb-5">
          <svg className="w-6 h-6 text-[#b8965a]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-semibold text-xl text-gray-800 mb-2">{ft('successTitle')}</p>
        <p className="text-gray-400 text-[13px]">{ft('successDesc')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] text-gray-400 mb-2 font-medium tracking-wide uppercase">{t('name')} *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-200 px-4 py-3.5 text-[14px] focus:outline-none focus:border-[#b8965a] transition-colors bg-white"
            placeholder={ft('namePlaceholder')}
          />
        </div>
        <div>
          <label className="block text-[11px] text-gray-400 mb-2 font-medium tracking-wide uppercase">{t('phone')} *</label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border border-gray-200 px-4 py-3.5 text-[14px] focus:outline-none focus:border-[#b8965a] transition-colors bg-white"
            placeholder={ft('phonePlaceholder')}
          />
        </div>
      </div>

      <div>
        <label className="block text-[11px] text-gray-400 mb-2 font-medium tracking-wide uppercase">{t('procedure')}</label>
        <select
          value={form.procedure}
          onChange={(e) => setForm({ ...form, procedure: e.target.value })}
          className="w-full border border-gray-200 px-4 py-3.5 text-[14px] focus:outline-none focus:border-[#b8965a] bg-white transition-colors"
        >
          <option value="">{ft('selectProcedure')}</option>
          {procedures.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-[11px] text-gray-400 mb-2 font-medium tracking-wide uppercase">{t('doctor')}</label>
        <select
          value={form.doctor}
          onChange={(e) => setForm({ ...form, doctor: e.target.value })}
          className="w-full border border-gray-200 px-4 py-3.5 text-[14px] focus:outline-none focus:border-[#b8965a] bg-white transition-colors"
        >
          <option value="">{ft('selectDoctor')}</option>
          {doctors.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          id="agree"
          checked={form.agree}
          onChange={(e) => setForm({ ...form, agree: e.target.checked })}
          className="mt-0.5 w-4 h-4 accent-[#b8965a]"
        />
        <label htmlFor="agree" className="text-[12px] text-gray-400 cursor-pointer leading-relaxed">
          {t('privacyAgree')} <span className="text-red-400">*</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-[#b8965a] text-white py-4 font-medium text-[14px] tracking-widest uppercase hover:bg-[#9a7a42] transition-all duration-500"
      >
        {t('submit')}
      </button>
    </form>
  );
}
