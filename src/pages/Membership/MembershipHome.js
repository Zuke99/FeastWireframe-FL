import React from 'react'
import { RiVipCrownLine, RiTimeLine, RiCalendarLine, RiCheckLine } from 'react-icons/ri'

function MembershipHome() {
  // Sample membership data
  const membership = {
    type: "Premium",
    status: "Active",
    startDate: "Jan 01, 2024",
    renewalDate: "Dec 31, 2024",
    daysRemaining: 342
  }

  // Updated membership features
  const features = [
    {
      free: "Basic training resources",
      trainer: "Full training library access",
      agency: "Complete training ecosystem"
    },
    {
      free: "1 Training Module",
      trainer: "All Training Modules",
      agency: "Custom Training Modules + White Label"
    },
    {
      free: "Community Support",
      trainer: "Priority Support",
      agency: "24/7 Dedicated Support"
    },
    {
      free: "Basic Analytics",
      trainer: "Advanced Analytics",
      agency: "Custom Analytics + API Access"
    },
    {
      free: "1 Trainer Connection",
      trainer: "Multiple Trainer Network",
      agency: "Agency Dashboard + Team Management"
    }
  ]

  const plans = [
    {
      name: "FREE",
      setupFee: "$1",
      setupNote: "One-time account setup fee",
      features: features.map(f => f.free),
      current: false,
      highlight: "Perfect for Starting"
    },
    {
      name: "TRAINER",
      pricing: [
        { amount: "$19", period: "/month" },
        { amount: "$149", period: "/year" },
        { amount: "$250", period: "Lifetime" }
      ],
      features: features.map(f => f.trainer),
      current: true,
      highlight: "Most Popular"
    },
    {
      name: "AGENCY",
      pricing: [
        { amount: "$49", period: "/month" },
        { amount: "$299", period: "/year" },
        { amount: "$450", period: "Lifetime" }
      ],
      features: features.map(f => f.agency),
      current: false,
      highlight: "Best Value"
    }
  ]

  return (
    <div className="p-6 h-screen overflow-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Membership</h1>
        <p className="text-gray-500">Manage your subscription and billing</p>
      </div>

      {/* Current Membership Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <RiVipCrownLine className="text-2xl text-orange-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{membership.type} Membership</h2>
              <p className="text-gray-500">Status: <span className="text-green-500">{membership.status}</span></p>
            </div>
          </div>
          <button className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500">
            Manage Subscription
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <RiCalendarLine className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Start Date</p>
                <p className="font-medium text-gray-800">{membership.startDate}</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <RiCalendarLine className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Renewal Date</p>
                <p className="font-medium text-gray-800">{membership.renewalDate}</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <RiTimeLine className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Days Remaining</p>
                <p className="font-medium text-gray-800">{membership.daysRemaining} days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Updated Membership Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`bg-white rounded-xl shadow-sm border p-6 relative
              ${plan.current ? 'border-orange-400 ring-2 ring-orange-400/20' : 'border-gray-200'}`}
          >
            {/* Highlight Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="px-3 py-1 bg-orange-400 text-white text-xs rounded-full">
                {plan.highlight}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-2">{plan.name}</h3>
            
            {/* Pricing Section */}
            <div className="mb-6">
              {plan.setupFee ? (
                <>
                  <div className="text-3xl font-bold text-gray-800">{plan.setupFee}</div>
                  <p className="text-sm text-gray-500">{plan.setupNote}</p>
                </>
              ) : (
                <div className="space-y-2">
                  {plan.pricing.map((price, idx) => (
                    <div key={idx} className="flex items-baseline space-x-1">
                      <span className="text-2xl font-bold text-gray-800">{price.amount}</span>
                      <span className="text-sm text-gray-500">{price.period}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Features List */}
            <div className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <RiCheckLine className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <button 
              className={`w-full py-2 rounded-lg border 
                ${plan.current 
                  ? 'border-orange-400 text-orange-400 hover:bg-orange-50' 
                  : 'bg-orange-400 text-white hover:bg-orange-500'}`}
            >
              {plan.current ? 'Current Plan' : 'Choose Plan'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MembershipHome 