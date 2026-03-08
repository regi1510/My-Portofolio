import { motion } from 'motion/react';

export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden">
      {/* Mac Window Controls */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#111]">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <div className="flex h-[600px]">
        {/* Sidebar */}
        <div className="w-64 border-r border-white/5 bg-[#0d0d0d] p-4 flex flex-col gap-2">
          <SidebarItem icon="LayoutDashboard" label="Site Overview" active />
          <SidebarItem icon="LineChart" label="Analytics" />
          <SidebarItem icon="Sparkles" label="Smart Keyword Generator" />
          <SidebarItem icon="Target" label="Goals" />
          <SidebarItem icon="FileText" label="Content Evaluation" />
          <SidebarItem icon="Link" label="Backlink Audit" />
          <SidebarItem icon="Wand2" label="Link Optimization Wizard" />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-[#050505] overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-xl font-semibold text-white">Site Overview</h2>
              <p className="text-sm text-gray-500">www.website.com ↗</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 rounded-md bg-[#111] border border-white/10 text-sm text-gray-400 flex items-center gap-2">
                <span className="text-purple-400">Jun 24</span> → Today
              </div>
              <div className="p-2 rounded-md bg-[#111] border border-white/10">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Top Cards */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <Card title="Visibility" value="10.15%" trend="+5.6%" trendUp>
              <div className="h-32 mt-4 relative">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,80 L20,60 L40,70 L60,40 L80,50 L100,20" fill="none" stroke="url(#purple-gradient)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="purple-gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </Card>
            <Card title="Organic Keywords" value="35.6K" trend="-2.5%" trendUp={false}>
              <div className="mt-4 space-y-3">
                <KeywordRow keyword="online payment processing" />
                <KeywordRow keyword="secure transactions" />
                <KeywordRow keyword="online transaction platform" />
                <KeywordRow keyword="online shopping payments" />
                <KeywordRow keyword="e-commerce payment gateway" />
              </div>
            </Card>
          </div>

          {/* Bottom Card */}
          <div className="w-full">
            <Card title="Traffic" value="59.8K" trend="+10.7%" trendUp>
              <div className="h-40 mt-4 relative">
                 <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,90 L20,70 L40,80 L60,50 L80,60 L100,30" fill="none" stroke="#8b5cf6" strokeWidth="1" />
                  <path d="M0,90 L20,70 L40,80 L60,50 L80,60 L100,30 L100,100 L0,100 Z" fill="url(#purple-fade)" opacity="0.2" />
                  <defs>
                    <linearGradient id="purple-fade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }: { icon: string, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${active ? 'bg-purple-500/10 text-purple-400' : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'}`}>
      <div className="w-4 h-4 opacity-70">
        {/* Placeholder for Lucide icons */}
        <div className="w-full h-full border-2 border-current rounded-sm" />
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

function Card({ title, value, trend, trendUp, children }: { title: string, value: string, trend: string, trendUp: boolean, children: React.ReactNode }) {
  return (
    <div className="p-5 rounded-xl bg-[#111] border border-white/5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm text-gray-400 font-medium">{title}</h3>
        <button className="text-gray-600 hover:text-gray-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-white">{value}</span>
        <span className={`text-sm font-medium ${trendUp ? 'text-green-400' : 'text-red-400'}`}>{trend}</span>
      </div>
      {children}
    </div>
  );
}

function KeywordRow({ keyword }: { keyword: string }) {
  return (
    <div className="flex justify-between items-center py-1 border-b border-white/5 last:border-0">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
        <span className="text-xs text-gray-300">{keyword}</span>
      </div>
      <span className="text-xs text-gray-600">—</span>
    </div>
  );
}
