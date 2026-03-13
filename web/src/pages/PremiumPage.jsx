import React, { useState } from 'react';
import { useAuth } from '../App';

export default function PremiumPage() {
  const { user } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubscribe = (planId) => {
    setIsProcessing(true);
    // Simulate API call and redirect to a payment gateway
    setTimeout(() => {
      window.location.href = `https://dummy-payment-gateway.com/checkout?plan=${planId}&user=${user?.username}`;
    }, 1500);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/50 via-surface-950 to-accent-950/50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium mb-6 animate-fade-in">
            <span className="text-lg">💎</span>
            Unlock Your Full Potential
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 animate-slide-up">
            Upgrade to <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Premium</span>
          </h1>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 animate-slide-up" style={{animationDelay: '0.1s'}}>
            Get unlimited AI analysis, deeper psychological insights, and priority access to new features designed to accelerate your growth.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '♾️', title: 'Unlimited Analysis', desc: 'Break free from daily session limits and analyze as many words as you need.' },
            { icon: '🧠', title: 'Advanced Insights', desc: 'Get deeper psychological profiling and customized action plans tailored to your traits.' },
            { icon: '⚡', title: 'Priority Access', desc: 'Be the first to experience new AI models, interactive coaches, and exclusive modules.' },
          ].map((benefit, i) => (
            <div key={i} className="glass-card p-6 text-center animate-slide-up" style={{animationDelay: `${0.2 + (i * 0.1)}s`}}>
              <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 flex items-center justify-center text-3xl mb-4 border border-amber-500/20">
                {benefit.icon}
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-amber-100">{benefit.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-center mb-12 text-white">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pro Monthly */}
          <div className="glass-card p-8 border border-white/10 relative animate-slide-up" style={{animationDelay: '0.4s'}}>
            <h3 className="font-display text-2xl font-bold text-white mb-2">Pro Monthly</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-extrabold text-white">$9</span>
              <span className="text-white/50">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Unlimited WAT Sessions', 'Detailed Token Heatmaps', 'AI Rewrite Coach', 'Basic Progress Tracking'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white/70">
                  <span className="text-emerald-400">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handleSubscribe('pro_monthly')}
              disabled={isProcessing}
              className="w-full py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all border border-white/20 disabled:opacity-50"
            >
              Subscribe Monthly
            </button>
          </div>

          {/* Pro Lifetime */}
          <div className="glass-card p-8 border-2 border-amber-500/50 relative relative transform md:-translate-y-4 shadow-2xl shadow-amber-500/10 animate-slide-up" style={{animationDelay: '0.5s'}}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="font-display text-2xl font-bold text-amber-300 mb-2">Pro Lifetime</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-extrabold text-white">$99</span>
              <span className="text-white/50">/one-time</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['All Monthly Features', 'Advanced Psychological Profiling', 'Exportable PDF Reports', 'Priority Support & New Features', 'Lifetime Access'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <span className="text-amber-400">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handleSubscribe('pro_lifetime')}
              disabled={isProcessing}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold transition-all shadow-lg shadow-amber-500/25 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : 'Get Lifetime Access'}
            </button>
          </div>
        </div>
      </section>
      
      {isProcessing && (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
             <div className="glass-card p-8 flex flex-col items-center max-w-sm text-center">
                 <div className="w-16 h-16 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mb-6"></div>
                 <h3 className="text-xl font-bold text-white mb-2">Redirecting to Payment...</h3>
                 <p className="text-white/60 text-sm">Please wait while we securely transfer you to our payment gateway.</p>
             </div>
         </div>
      )}
    </div>
  );
}
