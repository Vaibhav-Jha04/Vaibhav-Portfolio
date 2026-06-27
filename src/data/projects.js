import EvadeImg    from '../assets/evadegpt.jpg'
import FireImg     from '../assets/firefighter.png'
import VoiceImg    from '../assets/voiceforge.jpg'
import SumOneImg   from '../assets/sumofone.jpg'
import WeatherImg  from '../assets/weatherbot.jpg'
import CryptoImg   from '../assets/cryptotrader.jpg'
import GhostImg    from '../assets/ghostclaw.jpg'

const GH  = 'https://github.com/VaibhavJha-github'
const GH2 = 'https://github.com/Vaibhav-Jha04'

export const projects = [
  {
    id:          'evadegpt',
    title:       'EvadeGPT — AI Humanizer',
    type:        'SaaS Product',
    description: 'A subscription SaaS that detects AI-generated content and rewrites it to sound natural. Full-stack with Stripe billing, Google OAuth, and a custom NLP pipeline built on FastAPI.',
    tags:        ['Next.js', 'FastAPI', 'Python', 'Stripe', 'Supabase', 'Google OAuth'],
    image:       EvadeImg,
    github:      null,
    demo:        'https://www.evadegpt.ai/',
    featured:    true,
  },
  {
    id:          'voiceforge',
    title:       'VoiceForge — Multi-Character TTS',
    type:        'AI / Voice',
    description: 'A multi-character, batch text-to-speech and voice-cloning tool built on Fish-Speech. Register named voices from reference clips, parse speaker-tagged scripts into generation jobs, and batch-synthesise stitched audio through a Gradio interface.',
    tags:        ['Python', 'Fish-Speech', 'Gradio', 'TTS', 'Docker'],
    image:       VoiceImg,
    github:      `${GH2}/VoiceCloneAI`,
    demo:        null,
    featured:    false,
  },
  {
    id:          'sumofone-bot',
    title:       'Sum-to-One Arbitrage Bot',
    type:        'Quant / Trading',
    description: 'A guaranteed-arbitrage engine for prediction markets that exploits sum-to-one pricing inefficiencies across Polymarket and Kalshi. Features Kelly-criterion sizing, NegRisk handling, circuit breakers, daily loss limits, and Telegram alerting with dry-run, paper, and live modes.',
    tags:        ['Python', 'Polymarket', 'Kalshi', 'Arbitrage', 'WebSockets'],
    image:       SumOneImg,
    github:      `${GH2}/SumOfOneBot`,
    demo:        null,
    featured:    false,
  },
  {
    id:          'weather-bot',
    title:       'Weather Arbitrage Bot',
    type:        'Quant / Trading',
    description: 'An automated trading bot that prices weather-event prediction markets against ensemble forecasts to find mispriced positions. Implements four edge strategies (ensemble edge, price rules, ladder, lag-exploit) with fractional-Kelly sizing, risk caps, and a Telegram control interface.',
    tags:        ['Python', 'Polymarket', 'Forecasting', 'Kelly Criterion'],
    image:       WeatherImg,
    github:      `${GH2}/WeatherBot`,
    demo:        null,
    featured:    false,
  },
  {
    id:          'crypto-trader',
    title:       'Polymarket Copy-Trading Bot',
    type:        'Quant / Trading',
    description: 'A production-focused multi-wallet copy-trading system for Polymarket. Ranks a wallet universe, runs trades through ordered validation gates with hierarchical exposure limits and circuit breakers, and ships event-sourced audit logging, daily reporting, and deterministic backtesting.',
    tags:        ['Python', 'Docker', 'Risk Management', 'Backtesting'],
    image:       CryptoImg,
    github:      `${GH2}/CryptoTraderBot`,
    demo:        null,
    featured:    false,
  },
  {
    id:          'ghostclaw',
    title:       'GhostClaw — AI Agent Platform',
    type:        'AI / Full-Stack',
    description: 'An open-source weekend build: a TypeScript monorepo for an AI agent platform with a persistent memory layer, a Next.js + Supabase web app, and a companion iOS client. Explores autonomous agent workflows across web and mobile surfaces.',
    tags:        ['TypeScript', 'Next.js', 'Supabase', 'iOS', 'AI Agents'],
    image:       GhostImg,
    github:      `${GH2}/GhostClaw-OpensourceWeekendProject`,
    demo:        null,
    featured:    false,
  },
  {
    id:          'fire-robot',
    title:       'Autonomous Firefighting Simulation',
    type:        'Robotics',
    description: 'A multi-robot system in ROS and Gazebo where autonomous agents detect and suppress simulated fires. Formal verification using the PAT model checker validates agent behaviour properties.',
    tags:        ['C++', 'ROS', 'Gazebo', 'PAT', 'Python'],
    image:       FireImg,
    github:      `${GH}/ROS-PAT-Autonomous-Firefighting-Simulation`,
    demo:        null,
    featured:    false,
  },
]
