import { ref } from 'vue'

const LOCALE_KEY = 'ovl_locale'
export const locale = ref(localStorage.getItem(LOCALE_KEY) || 'en')

export function setLocale(l) {
  locale.value = l
  localStorage.setItem(LOCALE_KEY, l)
}

const T = {
  // HeroSection
  heroTagline: { en: '100 Days of Vibe Coding \u00b7 100 Open Source Projects', zh: '100\u5929 Vibe Coding \u00b7 100\u4e2a\u5f00\u6e90\u9879\u76ee' },
  heroSubtitle: { en: 'You tell me what you want. I\'ll build it.', zh: '\u4f60\u8bf4\u4f60\u60f3\u8981\u4ec0\u4e48\uff0c\u6211\u628a\u5b83\u505a\u51fa\u6765\u3002' },
  heroIdea: { en: '\ud83d\udca1 I Have an Idea', zh: '\ud83d\udca1 \u6211\u6709\u4e2a\u60f3\u6cd5' },
  heroProjects: { en: 'See Projects \u2193', zh: '\u770b\u770b\u9879\u76ee \u2193' },
  heroDays: { en: '100 Days', zh: '100\u5929' },
  heroCount: { en: '100 Open Source Projects', zh: '100\u4e2a\u5f00\u6e90\u9879\u76ee' },

  // AboutSection
  aboutTitle: { en: 'What Is This?', zh: '\u8fd9\u662f\u4ec0\u4e48\uff1f' },
  aboutSubtitle: { en: 'An open community experiment', zh: '\u4e00\u573a\u5f00\u653e\u7684\u793e\u533a\u5b9e\u9a8c' },
  aboutIdeas: { en: 'Ideas come from you', zh: '\u9700\u6c42\u6765\u81ea\u4f60' },
  aboutIdeasDesc: { en: 'That thing you wish existed in your life or work? Tell me about it, and I\'ll build it.', zh: '\u4f60\u751f\u6d3b\u4e2d\u3001\u5de5\u4f5c\u4e2d\u89c9\u5f97\u201c\u8981\u662f\u6709\u8fd9\u4e2a\u5c31\u597d\u4e86\u201d\u7684\u4e1c\u897f\uff0c\u544a\u8bc9\u6211\uff0c\u6211\u6765\u505a\u3002' },
  aboutOpen: { en: 'All code is open', zh: '\u4ee3\u7801\u5168\u90e8\u516c\u5f00' },
  aboutOpenDesc: { en: 'Every line of code is on GitHub. Read it, learn from it, use it.', zh: '\u6bcf\u4e00\u884c\u4ee3\u7801\u90fd\u5728 GitHub \u4e0a\u3002\u968f\u4fbf\u770b\u3001\u968f\u4fbf\u5b66\u3001\u968f\u4fbf\u62ff\u53bb\u7528\u3002' },
  aboutUsable: { en: 'Built to be used', zh: '\u505a\u51fa\u6765\u5c31\u80fd\u7528' },
  aboutUsableDesc: { en: 'All projects deploy to openvibelab.com \u2014 accessible worldwide, ready to use.', zh: '\u6240\u6709\u9879\u76ee\u90e8\u7f72\u5728 openvibelab.com \u4e0b\uff0c\u56fd\u5185\u76f4\u63a5\u8bbf\u95ee\uff0c\u4e0d\u7528\u7ffb\u5899\u3002' },
  aboutGrow: { en: 'Best projects grow', zh: '\u597d\u9879\u76ee\u4e00\u8d77\u505a\u5927' },
  aboutGrowDesc: { en: 'Popular projects get polished into mini-apps, apps, and even full products.', zh: '\u793e\u533a\u53cd\u54cd\u597d\u7684\u9879\u76ee\uff0c\u4f1a\u8ba4\u771f\u6253\u78e8\uff0c\u4e0a\u7ebf\u5c0f\u7a0b\u5e8f\u3001App\uff0c\u751a\u81f3\u6b63\u5f0f\u8fd0\u8425\u3002' },
  aboutWhyTitle: { en: 'Why "Vibe Coding"?', zh: '\u4e3a\u4ec0\u4e48\u53eb Vibe Coding\uff1f' },
  aboutWhyP1: { en: 'Not for showing off. Not for grinding. Not for KPIs.', zh: '\u4e0d\u662f\u4e3a\u4e86\u70ab\u6280\uff0c\u4e0d\u662f\u4e3a\u4e86\u5237\u9898\uff0c\u4e0d\u662f\u4e3a\u4e86\u5b8c\u6210 KPI\u3002' },
  aboutWhyP2: { en: 'Vibe Coding means following your instincts \u2014 build interesting things, useful things, things that make people smile. Rapid prototyping, rapid validation, rapid shipping.', zh: 'Vibe Coding \u662f\u8ddf\u7740\u611f\u89c9\u8d70 \u2014 \u505a\u6709\u8da3\u7684\u3001\u6709\u7528\u7684\u3001\u8ba9\u4eba\u4f1a\u5fc3\u4e00\u7b11\u7684\u4e1c\u897f\u3002\u5feb\u901f\u539f\u578b\uff0c\u5feb\u901f\u9a8c\u8bc1\uff0c\u5feb\u901f\u4e0a\u7ebf\u3002' },
  aboutWhyP3: { en: 'Each project is an experiment: can we build something people actually use, in the shortest time possible?', zh: '\u6bcf\u4e2a\u9879\u76ee\u90fd\u662f\u4e00\u6b21\u5b9e\u9a8c\uff1a\u80fd\u4e0d\u80fd\u7528\u6700\u77ed\u7684\u65f6\u95f4\uff0c\u505a\u51fa\u4e00\u4e2a\u771f\u6b63\u6709\u4eba\u7528\u7684\u4e1c\u897f\uff1f' },

  // RoadmapSection
  roadmapTitle: { en: 'Project Evolution', zh: '\u9879\u76ee\u8fdb\u5316\u8def\u7ebf' },
  roadmapSubtitle: { en: 'Every project has the chance to grow from an idea into a real product', zh: '\u6bcf\u4e2a\u9879\u76ee\u90fd\u6709\u673a\u4f1a\u4ece\u4e00\u4e2a\u60f3\u6cd5\u53d8\u6210\u4e00\u4e2a\u771f\u6b63\u7684\u4ea7\u54c1' },
  roadmapStep1: { en: 'Community Request', zh: '\u793e\u533a\u63d0\u9700\u6c42' },
  roadmapStep1Desc: { en: 'You tell us what you want', zh: '\u4f60\u8bf4\u4f60\u60f3\u8981\u4ec0\u4e48' },
  roadmapStep2: { en: 'Rapid Development', zh: '\u5feb\u901f\u5f00\u53d1' },
  roadmapStep2Desc: { en: 'MVP in 1-3 days', zh: '1-3 \u5929\u505a\u51fa MVP' },
  roadmapStep3: { en: 'Live & Usable', zh: '\u4e0a\u7ebf\u53ef\u7528' },
  roadmapStep3Desc: { en: 'Deploy to openvibelab.com', zh: '\u90e8\u7f72\u5230 openvibelab.com' },
  roadmapStep4: { en: 'Community Co-building', zh: '\u793e\u533a\u5171\u5efa' },
  roadmapStep4Desc: { en: 'Feedback + PR contributions', zh: '\u53cd\u9988 + PR \u8d21\u732e' },
  roadmapStep5: { en: 'Full Product', zh: '\u6b63\u5f0f\u4ea7\u54c1' },
  roadmapStep5Desc: { en: 'Mini-app / App / Ongoing operation', zh: '\u5c0f\u7a0b\u5e8f / App / \u6301\u7eed\u8fd0\u8425' },
  roadmapNote: { en: 'Most projects stay at MVP stage, and that\'s fine. But the ones that truly meet a need \u2014 we\'ll grow them into real products. Every contributor is a co-creator.', zh: '\u5927\u90e8\u5206\u9879\u76ee\u4f1a\u505c\u5728 MVP \u9636\u6bb5\uff0c\u8fd9\u5f88\u6b63\u5e38\u3002\u4f46\u90a3\u4e9b\u771f\u6b63\u51fb\u4e2d\u9700\u6c42\u7684\u9879\u76ee\uff0c\u6211\u4eec\u4f1a\u628a\u5b83\u505a\u6210\u771f\u6b63\u7684\u4ea7\u54c1\u3002\u53c2\u4e0e\u8fc7\u8d21\u732e\u7684\u4eba\uff0c\u5c31\u662f\u5171\u521b\u8005\u3002' },

  // StatsSection
  statsProjects: { en: 'projects', zh: '\u4e2a\u9879\u76ee' },
  statsLive: { en: 'live', zh: '\u5df2\u4e0a\u7ebf' },
  statsRequests: { en: 'community requests', zh: '\u793e\u533a\u9700\u6c42' },
  statsContributors: { en: 'contributors', zh: '\u8d21\u732e\u8005' },

  // ProjectsSection
  projectsTitle: { en: 'Projects', zh: '\u9879\u76ee\u5c55\u793a' },
  projectsSubtitle: { en: 'Each one is a community idea that became reality', zh: '\u6bcf\u4e00\u4e2a\u90fd\u662f\u793e\u533a\u7684\u60f3\u6cd5\u53d8\u6210\u4e86\u73b0\u5b9e' },
  filterAll: { en: 'All', zh: '\u5168\u90e8' },
  filterLive: { en: 'Live', zh: '\u5df2\u4e0a\u7ebf' },
  filterDev: { en: 'In Dev', zh: '\u5f00\u53d1\u4e2d' },
  filterQueued: { en: 'Queued', zh: '\u6392\u961f\u4e2d' },
  projectsEmpty: { en: 'No projects yet', zh: '\u8fd8\u6ca1\u6709\u9879\u76ee' },
  projectsEmptyDesc: { en: 'The first request is waiting for you. Your idea could be the first project to be built.', zh: '\u7b2c\u4e00\u4e2a\u9700\u6c42\u7b49\u4f60\u6765\u63d0\u3002\u4f60\u7684\u60f3\u6cd5\u53ef\u80fd\u5c31\u662f\u7b2c\u4e00\u4e2a\u88ab\u5b9e\u73b0\u7684\u9879\u76ee\u3002' },
  projectsEmptyCta: { en: '\ud83d\udca1 Submit the First Request', zh: '\ud83d\udca1 \u63d0\u4ea4\u7b2c\u4e00\u4e2a\u9700\u6c42' },

  // ProjectCard
  statusLive: { en: 'Live', zh: '\u5df2\u4e0a\u7ebf' },
  statusDev: { en: 'In Dev', zh: '\u5f00\u53d1\u4e2d' },
  statusQueued: { en: 'Queued', zh: '\u6392\u961f\u4e2d' },
  statusPaused: { en: 'Paused', zh: '\u5df2\u6682\u505c' },
  statusUpgraded: { en: 'Upgraded', zh: '\u5df2\u5347\u7ea7' },
  cardTry: { en: 'Try it \u2192', zh: '\u5728\u7ebf\u4f53\u9a8c \u2192' },
  cardSource: { en: 'Source', zh: '\u6e90\u7801' },

  // ParticipateSection
  participateTitle: { en: 'How to Participate?', zh: '\u600e\u4e48\u53c2\u4e0e\uff1f' },
  participateSubtitle: { en: 'No matter who you are, you can be part of this', zh: '\u4e0d\u7ba1\u4f60\u662f\u8c01\uff0c\u90fd\u80fd\u53c2\u4e0e\u8fd9\u4ef6\u4e8b' },
  participateNoCoder: { en: 'Can\'t code?', zh: '\u4e0d\u4f1a\u5199\u4ee3\u7801\uff1f' },
  participateSubmit: { en: 'Submit ideas', zh: '\u63d0\u9700\u6c42' },
  participateSubmitDesc: { en: 'Tell me what you want', zh: '\u544a\u8bc9\u6211\u4f60\u60f3\u8981\u4ec0\u4e48' },
  participateVote: { en: 'Vote', zh: '\u6295\u7968' },
  participateVoteDesc: { en: 'Upvote ideas you like \ud83d\udc4d', zh: '\u7ed9\u559c\u6b22\u7684\u9700\u6c42\u70b9 \ud83d\udc4d' },
  participateFeedback: { en: 'Feedback', zh: '\u53cd\u9988' },
  participateFeedbackDesc: { en: 'Share your thoughts after using', zh: '\u7528\u5b8c\u4e4b\u540e\u8bf4\u8bf4\u611f\u53d7' },
  participateSpread: { en: 'Spread the word', zh: '\u4f20\u64ad' },
  participateSpreadDesc: { en: 'Let more people know', zh: '\u8ba9\u66f4\u591a\u4eba\u77e5\u9053\u8fd9\u4ef6\u4e8b' },
  participateSubmitCta: { en: 'Submit my idea', zh: '\u63d0\u4ea4\u6211\u7684\u60f3\u6cd5' },
  participateCoder: { en: 'Know how to code?', zh: '\u4f1a\u5199\u4ee3\u7801\uff1f' },
  participatePR: { en: 'Contribute PRs', zh: '\u8d21\u732e PR' },
  participatePRDesc: { en: 'Every project welcomes contributions', zh: '\u6bcf\u4e2a\u9879\u76ee\u90fd\u6b22\u8fce' },
  participateBug: { en: 'Fix bugs', zh: '\u4fee Bug' },
  participateBugDesc: { en: 'Spot issues, fix them directly', zh: '\u53d1\u73b0\u95ee\u9898\u76f4\u63a5\u6539' },
  participateFeature: { en: 'Add features', zh: '\u52a0\u529f\u80fd' },
  participateFeatureDesc: { en: 'Make projects better', zh: '\u8ba9\u9879\u76ee\u53d8\u5f97\u66f4\u597d' },
  participateCore: { en: 'Core member', zh: '\u6838\u5fc3\u6210\u5458' },
  participateCoreDesc: { en: 'Maintain great projects together', zh: '\u597d\u9879\u76ee\u4e00\u8d77\u957f\u671f\u7ef4\u62a4' },
  participateGithub: { en: 'Go to GitHub', zh: '\u53bb GitHub \u770b\u4ee3\u7801' },

  // CtaSection
  ctaTitle: { en: 'All you need is an idea', zh: '\u4f60\u53ea\u9700\u8981\u6709\u4e00\u4e2a\u60f3\u6cd5' },
  ctaDesc: { en: 'No need to code, no need to design. Just tell me what you think "would be great to have", and I\'ll handle the rest.', zh: '\u4e0d\u9700\u8981\u61c2\u4ee3\u7801\uff0c\u4e0d\u9700\u8981\u753b\u539f\u578b\u3002\u8bf4\u51fa\u4f60\u89c9\u5f97\u201c\u8981\u662f\u6709\u8fd9\u4e2a\u5c31\u597d\u4e86\u201d\u7684\u4e1c\u897f\uff0c\u5269\u4e0b\u7684\u4ea4\u7ed9\u6211\u3002' },
  ctaSubmit: { en: '\ud83d\udca1 Submit my request', zh: '\ud83d\udca1 \u63d0\u4ea4\u6211\u7684\u9700\u6c42' },
  ctaSeeOthers: { en: 'See what others submitted', zh: '\u770b\u770b\u522b\u4eba\u63d0\u4e86\u4ec0\u4e48' },

  // FooterSection
  footerBilibili: { en: 'Bilibili', zh: 'B\u7ad9' },
  footerXiaohongshu: { en: 'Xiaohongshu', zh: '\u5c0f\u7ea2\u4e66' },
  footerWechat: { en: 'WeChat Official', zh: '\u5fae\u4fe1\u516c\u4f17\u53f7' },
  footerComingSoon: { en: '(coming soon)', zh: '\uff08\u5373\u5c06\u5f00\u901a\uff09' },
  footerTagline: { en: 'One person starts it. Everyone joins in.', zh: '\u4e00\u4e2a\u4eba\u53d1\u8d77\uff0c\u6240\u6709\u4eba\u53c2\u4e0e\u3002' },
}

export function t(key) {
  const entry = T[key]
  if (!entry) return key
  return entry[locale.value] || entry.en || key
}
