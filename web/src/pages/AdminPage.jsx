import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Tabs } from '../components/ui/Tabs';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell, RadialBarChart, RadialBar, Legend 
} from 'recharts';

export default function AdminPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Mock global stats data
    setTimeout(() => {
      setData({
        usersCount: 125,
        sessionsCount: 3420,
        averageScore: 0.68,
        activeOrg: 'UdaanCoach Global',
        monthlyActive: [
          { name: 'Oct', users: 400, sessions: 2400 },
          { name: 'Nov', users: 520, sessions: 3100 },
          { name: 'Dec', users: 800, sessions: 4200 },
          { name: 'Jan', users: 950, sessions: 5100 },
          { name: 'Feb', users: 1100, sessions: 6400 },
          { name: 'Mar', users: 1450, sessions: 7800 },
        ],
        modulePopularity: [
          { name: 'SSB Defence', value: 45, fill: '#06b6d4' },
          { name: 'Job Interview', value: 25, fill: '#8b5cf6' },
          { name: 'Student Mindset', value: 20, fill: '#10b981' },
          { name: 'Workplace', value: 10, fill: '#f59e0b' },
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-surface-500">Loading admin data...</div>
      </div>
    );
  }

  const overviewTab = (
    <div className="space-y-6 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card border-none">
          <CardContent className="pt-6">
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Total Users</p>
            <p className="text-3xl font-bold font-display text-primary-400">{data.usersCount}</p>
          </CardContent>
        </Card>
        <Card className="glass-card border-none">
          <CardContent className="pt-6">
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Total Sessions</p>
            <p className="text-3xl font-bold font-display text-accent-400">{data.sessionsCount}</p>
          </CardContent>
        </Card>
        <Card className="glass-card border-none">
          <CardContent className="pt-6">
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Avg Competency</p>
            <p className="text-3xl font-bold font-display text-emerald-400">{(data.averageScore * 100).toFixed(0)}%</p>
          </CardContent>
        </Card>
        <Card className="glass-card border-none">
          <CardContent className="pt-6">
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Active Org</p>
            <p className="text-lg font-bold font-display text-white mt-1 truncate">{data.activeOrg}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card border-none p-6">
          <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-6">User Engagement Growth</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.monthlyActive}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.1)" tick={{fill: 'rgba(255,255,255,0.3)', fontSize: 12}} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px' }} />
                <Area type="monotone" dataKey="sessions" stroke="#06b6d4" fillOpacity={1} fill="url(#colorUsers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="glass-card border-none p-6">
          <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-6">Irregular Engagement Matrix</h3>
          <div className="h-[300px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart 
                cx="50%" 
                cy="50%" 
                innerRadius="20%" 
                outerRadius="90%" 
                barSize={12} 
                data={data.modulePopularity}
              >
                <RadialBar
                  minAngle={15}
                  label={{ position: 'insideStart', fill: '#fff', fontSize: 10 }}
                  background
                  clockWise
                  dataKey="value"
                  cornerRadius={10}
                />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px' }} />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );

  const usersTab = (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Recent Users (Stub)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-surface-400 py-8 text-center border-2 border-dashed border-surface-800 rounded-xl">
          User table will render here. Data pending API integration.
        </div>
      </CardContent>
    </Card>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', content: overviewTab },
    { id: 'users', label: 'Users & Org', content: usersTab },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 animate-slide-up">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold mb-2">📊 Stats Dashboard</h1>
        <p className="text-white/40 font-medium">Platform-wide performance and user engagement metrics.</p>
      </div>

      <Tabs tabs={tabs} defaultTab="overview" />
    </div>
  );
}
