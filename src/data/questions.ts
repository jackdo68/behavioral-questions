// Behavioural interview question bank.
// Each question maps to one of the prepared stories (kept consistent so the
// same story isn't reused across a single interview). Answers use the STAR
// structure where a story applies, or a direct talking-point answer otherwise.

export interface Star {
  situation: string;
  task?: string;
  action: string;
  result: string;
}

export interface Question {
  id: string;
  question: string;
  /** What the interviewer is really probing for. */
  whatTheyAsk?: string;
  /** STAR story, when the answer is a worked example. */
  story?: Star;
  /** Direct answer / talking points, when no full story is needed. */
  answer?: string;
  /** Short reminders to land the answer well. */
  tips?: string[];
  /** Likely follow-up questions an interviewer will ask. */
  followUps?: string[];
}

export interface Category {
  id: string;
  name: string;
  blurb: string;
  questions: Question[];
}

export const categories: Category[] = [
  {
    id: 'leadership-initiative',
    name: 'Leadership & Initiative',
    blurb: 'Driving change, leading without authority, inspiring others to follow.',
    questions: [
      {
        id: 'pushed-for-change',
        question: 'Tell me about a time you pushed for change. What was the outcome and what did you learn?',
        whatTheyAsk: 'Do you have drive and the influencing skills to move people, not just opinions?',
        story: {
          situation:
            'As an IC I noticed one of our core services was still written in plain JavaScript — poorly typed, prone to production bugs that could cost the business a lot, and so fragile that other developers were reluctant to touch it. It had sat in the tech-debt backlog for a long time.',
          task:
            'I wanted to migrate the whole codebase to TypeScript — a language the squad already knew — to speed up development and cut production bugs. The catch: the approach had to be feasible enough to break into small tasks, so it wouldn\'t eat the team\'s capacity or introduce breaking changes.',
          action:
            'I asked my tech lead for 2 hours a week to research. I studied how big companies like Stripe handled large migrations, tested migration tooling, and landed on a compiler config that let the service run JS and TS side by side. That meant developers could migrate the small piece they were already touching, instead of one risky big-bang rewrite.',
          result:
            'Over 60% of the codebase migrated in about two months without slowing feature delivery. Developers liked it because they only touched what was relevant to their task. The Head of Engineering praised the approach and asked to roll it out to other legacy projects.',
        },
        tips: [
          'Emphasise you came with a researched proposal + POC, not just an opinion.',
          '"Leading by doing" — once people saw it was feasible, they followed.',
        ],
        followUps: ['What did you learn?', 'Did you share it with anyone?', 'What would you do differently?'],
      },
      {
        id: 'took-initiative',
        question: 'Tell me about a time you took initiative on something outside your direct responsibilities.',
        whatTheyAsk: 'Are you an owner? Do you act on problems you spot even when nobody asked you to?',
        story: {
          situation:
            'Our KYC flow required two Australian forms of ID (Passport + Driver\'s Licence) to verify users for P2P transactions. Non-Australian residents — international students especially — usually only had a visa and an international licence, so they were locked out. The issue had been pushed back for a long time because P2P wasn\'t directly profitable.',
          task:
            'I took the lead on building an alternative verification path so these users could be onboarded.',
          action:
            'I pulled together user statistics and input from the Customer Service team and showed the Head of Engineering that up to 15% of users couldn\'t verify with their documents — and many had abandoned the app. I researched a third-party provider (GBG) that could validate international IDs as an alternative to GreenID, and built the business case.',
          result:
            'The project ran for about a year. After launch we had records of hundreds of users verifying for the first time with international identification — opening a market segment we\'d been turning away.',
        },
        tips: [
          'Show you weighed the trade-off: low direct profit vs. opening a whole market and doing right by users.',
          'Tie initiative to data, not just a hunch.',
        ],
        followUps: ['How did you get buy-in for something that wasn\'t profitable?', 'How did you measure success?'],
      },
      {
        id: 'lead-without-authority',
        question: 'Tell me about a time you led or influenced people without formal authority.',
        whatTheyAsk: 'Can you bring a team and stakeholders along the journey through influence, not a title?',
        story: {
          situation:
            'I was an IC, not a lead, but I believed our biggest legacy service needed to move off untyped JavaScript. Plenty of people agreed in principle, but nobody owned it and a big rewrite felt too risky to greenlight.',
          action:
            'Rather than pitch an opinion, I built proof. I researched how others (e.g. Stripe) did incremental migrations, set up a config that ran JS and TS together, and demoed a working POC to the squad and the engineering chapter. I made it trivially easy for any developer to migrate just the part they were touching.',
          result:
            'The team adopted it organically — 60%+ migrated in two months with no velocity hit. Leadership asked to apply it elsewhere. I led the direction without ever being the formal owner.',
        },
        tips: ['"Leading by doing" is the throughline — make the right thing the easy thing.'],
      },
      {
        id: 'greatest-achievement',
        question: 'What has been your greatest professional achievement?',
        whatTheyAsk: 'What do you consider impactful, and can you articulate scale, ownership, and outcome?',
        story: {
          situation:
            'I led the build of a Consent Management system for our Platform-as-a-Service. Existing users from two legacy products and brand-new users all had to access the platform smoothly, with every user giving consent under new terms before proceeding.',
          task:
            'As feature lead I had to migrate existing user consents from separate systems into the new one, and drive the email/prompt flows so users consented during authorization — all with zero downtime.',
          action:
            'I worked closely with the legal team so every flow met regulatory requirements, and gathered requirements from external stakeholders and Customer Service to keep the experience frictionless.',
          result:
            '545,000 users were migrated and able to log in with no issues and no support escalations, all accepted onto the new terms with full compliance.',
        },
        tips: [
          'Lead with scale (545k) and the hard constraint (zero downtime + compliance).',
          'Credit the cross-functional work — legal, CS, stakeholders.',
        ],
        followUps: ['What was the hardest part?', 'What would you do differently?'],
      },
    ],
  },
  {
    id: 'conflict-disagreement',
    name: 'Conflict & Disagreement',
    blurb: 'Handling disagreement healthily — with peers, leaders, and between others.',
    questions: [
      {
        id: 'disagree-technical-decision',
        question: 'Tell me about a time you disagreed with a technical decision.',
        whatTheyAsk: 'Can you push back constructively without being difficult or ego-driven?',
        story: {
          situation:
            'A core service was still on poorly-typed JavaScript and kept causing production errors. The prevailing suggestion was a single, one-off rewrite to TypeScript.',
          task:
            'I disagreed — a big-bang migration on a large, fragile codebase felt too risky and would block feature work.',
          action:
            'Instead of just objecting, I took a step back and did my own research (including how Stripe approached it), then proposed an incremental path: configure the compiler so JS and TS run together, letting developers migrate piece-by-piece. I ran a POC and sought input from my tech lead and principal engineer before bringing the proposal back to the team.',
          result:
            'Once the POC proved it out, the team bought in. 60%+ migrated in two months with no velocity hit, and leadership rolled the pattern out elsewhere.',
        },
        tips: [
          'Frame disagreement as "I came with a better-researched alternative", not "I said no".',
          'Show you pressure-tested your idea with senior engineers first.',
        ],
      },
      {
        id: 'resolve-disagreement-teammate',
        question: 'How did you resolve a disagreement with another team member?',
        whatTheyAsk: 'Are you emotionally mature? Do you separate the problem from the person?',
        answer:
          'My approach depends on the nature of the disagreement. If it\'s technical, I take a step back and do my own research first — different people solve things differently, so I want to genuinely understand their position. I\'ll often sanity-check my view with my tech lead or a principal engineer before going back to the person, so the conversation is about the best solution, not about winning. If it\'s not technical, I usually wait until both of us are calm and talk one-on-one. We can almost always find common ground by anchoring on the shared goal. If we still can\'t agree on something important, I\'ll involve my manager to help mediate rather than let it fester.',
        tips: ['Anchor on the mutual goal.', 'Escalate only when genuinely stuck — and frame it as seeking help, not tattling.'],
      },
      {
        id: 'resolve-conflict-between-others',
        question: 'Tell me about a time you resolved conflict between two other parties.',
        whatTheyAsk: 'Can you operate in messy team dynamics and de-escalate as a neutral party?',
        story: {
          situation:
            'I joined a team of six (a tech lead, four developers, one QA) in the final phase of a migration. They were behind schedule because of friction between the tech lead and the rest of the team — the tech lead was under delivery pressure but communicating poorly, and the engineers felt burnt out and directionless.',
          task:
            'My nominal job was technical — database schema updates and cron jobs to migrate user records with no downtime. But the real blocker was the team dynamic.',
          action:
            'I listened to both sides without picking one. I refined the tasks into clearer, more detailed pieces and jumped in to unblock engineers directly. I ran short retros so people could raise issues safely and we turned them into action items. And I quietly flagged to the engineering manager that the tech lead needed support — a better way to outline and assign work — not just more pressure.',
          result:
            'The project hit its deadline, stakeholders praised the outcome, and the tech lead reconciled with the team.',
        },
        tips: ['Stay neutral — you listened to both sides.', 'You fixed the system (clarity, retros, manager support), not just symptoms.'],
      },
      {
        id: 'disagree-with-manager',
        question: 'Tell me about a time you disagreed with your manager or a senior leader.',
        whatTheyAsk: 'Will you speak up respectfully when you think leadership is wrong?',
        answer:
          'When I disagree with a leader, I keep it about evidence and the shared goal rather than positions. A good example was the TypeScript migration: the leaning was towards a single big-bang rewrite, which I thought was too risky. Rather than argue, I asked for a small amount of time to research alternatives, built a POC of an incremental approach, and presented the data. Framing it as "here\'s a lower-risk way to reach the same outcome" made it easy for leadership to say yes — and they later asked to apply it more broadly. I\'ve found that disagreeing with a proposal works far better than disagreeing with a person.',
        tips: ['Disagree with the idea, backed by a POC — never make it personal.'],
      },
    ],
  },
  {
    id: 'failure-learning',
    name: 'Failure & Learning',
    blurb: 'Mistakes, calculated risks that failed, and how you grow from them.',
    questions: [
      {
        id: 'mistake-learned-from',
        question: 'Tell me about a mistake you made and how you learned from it.',
        whatTheyAsk: 'Are you self-aware and accountable? Do lessons actually change your behaviour?',
        story: {
          situation:
            'I introduced a new feature to improve security on a legacy system — a "good to have" enhancement rather than something critical.',
          task:
            'The goal was to harden the system, but I underestimated how tightly coupled the legacy code was.',
          action:
            'The change ended up breaking an existing piece of functionality because there wasn\'t enough automated coverage to catch the regression, and I\'d leaned too much on manual checks.',
          result:
            'We caught and rolled it back, but the lesson stuck: on a legacy system, before adding any feature, I now make sure integration and E2E tests cover the existing behaviour first. I treat "is this protected by tests?" as a precondition, not an afterthought — and I shared that with the team so it became a norm.',
        },
        tips: [
          'Pick a real, contained mistake — owning a genuine failure reads as a strength.',
          'Spend most of the answer on the lesson and the changed behaviour.',
        ],
        followUps: ['What did you learn?', 'Did you share it with the team?', 'What would you do differently?'],
      },
      {
        id: 'calculated-risk-failed',
        question: 'Tell me about a time you took a calculated risk and it failed. What did you learn?',
        whatTheyAsk: 'Do you take smart risks, own the downside, and extract a lesson?',
        story: {
          situation:
            'I decided to ship a security enhancement to a legacy service — a calculated bet that the upside (better security) was worth touching fragile code.',
          task:
            'I judged the risk acceptable based on my read of the code, but I didn\'t fully account for the gaps in test coverage.',
          action:
            'The new feature broke an existing flow. We rolled it back quickly, but it was a real miss.',
          result:
            'The lesson: a risk is only "calculated" if you\'ve quantified the blast radius. For legacy systems that now means landing integration and E2E coverage for existing behaviour before introducing change. I\'d still take the risk — but I\'d de-risk the foundation first.',
        },
        tips: ['Show the risk was reasoned, not reckless — and that the lesson made future risks safer.'],
      },
      {
        id: 'missed-deadline',
        question: 'Tell me about a time you (or your team) missed a deadline or fell behind.',
        whatTheyAsk: 'How do you handle pressure, communicate slippage, and recover?',
        story: {
          situation:
            'I was brought into a team in the final phase of a migration that was already behind schedule — largely because of friction between the tech lead and the engineers, not pure technical difficulty.',
          task:
            'I needed to deliver my technical piece (schema changes, migration cron jobs) but also help get delivery back on track.',
          action:
            'I broke the work into clearer, smaller tasks so progress was visible, jumped in to unblock people, ran short retros to surface issues early, and flagged to the manager where the tech lead needed support. We re-set expectations rather than quietly hoping to catch up.',
          result:
            'The team recovered and hit the deadline, with praise from stakeholders. The biggest takeaway was that "behind schedule" is often a communication problem before it\'s an engineering one.',
        },
        tips: ['Show you surface slippage early and address root causes, not just symptoms.'],
      },
      {
        id: 'biggest-weakness',
        question: "What's your biggest weakness?",
        whatTheyAsk: 'Are you self-aware, and are you actively working on it?',
        answer:
          'Honestly, public speaking and stakeholder communication. I\'m most comfortable in the technical space — working with engineers, in code reviews and design discussions. Presenting to a broader audience or navigating business-stakeholder conversations is something I\'ve had to work harder at. So I\'ve deliberately put myself in those situations: presenting in engineering chapter meetings, getting more involved in business discussions, and mentoring junior engineers, which forces me to explain technical ideas to different audiences. It\'s still a work in progress, but I\'ve noticed a real difference over the past year.',
        tips: [
          'Pick a genuine weakness, not a humblebrag like "I work too hard".',
          'The proof is in the concrete steps you\'re taking and the visible improvement.',
        ],
      },
    ],
  },
  {
    id: 'teamwork',
    name: 'Teamwork & Collaboration',
    blurb: 'Team dynamics, helping others succeed, and putting the team first.',
    questions: [
      {
        id: 'help-underperforming',
        question: "Tell me about a time you helped a struggling teammate or team become more successful.",
        whatTheyAsk: 'Do you lift others up? Are you generous with your time and knowledge?',
        answer:
          'It depends on the root cause. If someone is struggling because of a technical gap, I\'m happy to spend time rubber-ducking, brainstorming and researching alongside them — and honestly I learn from it too. If the struggle is about communication with other teams or stakeholders, I take a different tack: I\'ll set up a call, start a Slack thread, or raise it in standup to unblock them. The clearest example was a team in conflict during a migration — I refined their tasks for clarity, ran retros so people could be heard, and got the manager to support the tech lead. They went from missing the deadline to hitting it.',
        tips: ['Differentiate the response by root cause (skill gap vs. communication).'],
      },
      {
        id: 'best-worst-team',
        question: "Think about the best and worst teams you've been on. What made the difference?",
        whatTheyAsk: 'What do you value in team culture, and do you contribute to it?',
        answer:
          'The best teams are ones where you\'re comfortable sharing your thoughts and opinions, and where people are happy to drop what they\'re doing to help unblock each other. Psychological safety plus genuine willingness to help is the combination. The worst teams I\'ve been on lacked that — people protected their own patch, communication was poor, and one or two members coasted while others carried them, which quietly burned out the strong performers. I try to be the person who makes it safe to speak up and who jumps in to help.',
      },
      {
        id: 'team-over-personal',
        question: 'Have you ever put team goals above your personal ambitions?',
        whatTheyAsk: 'Are you a team player or an individual glory-seeker?',
        answer:
          'I generally do put team goals first. Growing my own skills as a developer is always something I want — but it\'s less important to me than what the team has committed to deliver. When the team succeeds, that\'s where I get a real sense of impact, and it benefits the organisation as a whole. I\'d rather spend an afternoon unblocking a teammate so we ship together than optimise for my own ticket count.',
      },
      {
        id: 'alone-vs-collaborate',
        question: 'When do you choose to work alone versus collaborate?',
        whatTheyAsk: 'Do you know when deep focus helps and when collaboration is essential?',
        answer:
          'Working alone gives the deepest focus, so for well-defined, contained tasks I\'ll head down and just get it done quickly. But the final product is always a combined effort, so for anything with ambiguity, cross-team impact, or design decisions, I default to collaborating early — communicating well and being willing to get hands-on to help others. The skill is knowing which mode a piece of work needs, and not staying heads-down when the team needs alignment.',
      },
    ],
  },
  {
    id: 'customer-focus',
    name: 'Customer Focus',
    blurb: 'Putting users first, empathy, and the trade-offs that come with it.',
    questions: [
      {
        id: 'put-customer-first',
        question: 'Tell me about a time you put the customer first. What trade-offs did you make?',
        whatTheyAsk: 'Is your mentality genuinely user-centred, even when it costs something?',
        story: {
          situation:
            'Our KYC required two Australian IDs to do P2P transactions. International users — students especially — typically only had a visa and an international licence, so they were shut out. The issue had been deprioritised because P2P didn\'t directly generate profit.',
          task:
            'I chose to champion an alternative verification path even though it wasn\'t my team\'s direct mandate and the feature wasn\'t a money-maker — because it was clearly right for those users and opened a real market.',
          action:
            'I gathered user stats and Customer Service input to show ~15% of users couldn\'t verify and many had churned, then researched and proposed GBG to validate international IDs, and made the business case to the Head of Engineering.',
          result:
            'About a year later, hundreds of users were verifying for the first time with international identification. The trade-off — investing engineering effort in a non-profitable flow — paid off in access and goodwill.',
        },
        tips: ['Name the trade-off explicitly: effort spent on a low-profit flow because it was right for users.'],
      },
      {
        id: 'fixed-problem-for-customer',
        question: 'Tell me about a time you fixed a problem for a customer and showed empathy.',
        whatTheyAsk: 'Do you feel the user\'s pain, or just process tickets?',
        story: {
          situation:
            'Our checkout API ran on serverless, and as the customer base grew sharply, users started experiencing slow checkout responses — P95 latency around 9 seconds. That\'s real friction at the worst possible moment, when someone is trying to pay.',
          task:
            'I wanted to fix the customer-facing pain fast, without a months-long migration to containers.',
          action:
            'I spent two weeks on monitoring, Lambda tuning, cold-start reduction and bundle-size optimisation, consulting an AWS SME, and proved it with a POC before rolling out.',
          result:
            'P95 latency dropped about 40% (≈9s → ≈5s). Empathy here meant treating slow checkout as a real customer problem worth dropping other work for, and we applied the findings across other serverless services.',
        },
      },
    ],
  },
  {
    id: 'decision-making',
    name: 'Decision Making & Prioritization',
    blurb: 'Making calls with incomplete information, balancing trade-offs, adapting.',
    questions: [
      {
        id: 'decision-without-info',
        question: 'Tell me about a time you had to make a decision without all the information you needed.',
        whatTheyAsk: 'Are you comfortable with ambiguity? Do you de-risk decisions intelligently?',
        story: {
          situation:
            'When I set out to cut checkout latency (and similarly when scoping the TypeScript migration), I didn\'t have all the information up front — I didn\'t know which optimisation would move the needle most.',
          task:
            'I had to commit to a direction without certainty it would work.',
          action:
            'I started by asking the right questions and gathering requirements, then ran a spike to research the options, and built a POC to prove the solution actually worked before committing the team to refining and delivering it.',
          result:
            'The POC de-risked the decision — for checkout, the optimisations cut P95 latency ~40%. My rule is: when you can\'t know up front, buy information cheaply with a spike or POC before betting the team\'s time.',
        },
        tips: ['Frame it as: reduce uncertainty cheaply (spike/POC) before a big commitment.'],
      },
      {
        id: 'balance-tradeoffs',
        question: 'Tell me about a time you had to balance competing priorities or trade-offs.',
        whatTheyAsk: 'Can you make pragmatic decisions with heart and balance — cost vs. performance, new vs. fix?',
        story: {
          situation:
            'Our checkout API was serverless, which was great for cost on spiky/low traffic. But as traffic surged, customers hit slow responses. The "proper" fix — moving to containerised services — would take months, and it competed with our roadmap of new features.',
          task:
            'I had to balance cost, performance, and the opportunity cost of pausing feature work.',
          action:
            'Rather than the expensive rewrite, I spent two weeks finding a leaner path — monitoring, Lambda tuning, cold-start and bundle-size reduction with an AWS SME — and proved it with a POC.',
          result:
            'We got a ~40% P95 latency improvement (≈9s → ≈5s) without touching the infrastructure or derailing the roadmap, and reused the findings elsewhere. It was the balanced call: most of the customer benefit for a fraction of the cost.',
        },
        tips: ['Show you optimised for the best outcome-to-cost ratio, not the "purest" solution.'],
      },
      {
        id: 'adapt-changing-requirements',
        question: 'Tell me about a time you had to pivot or adapt to changing requirements.',
        whatTheyAsk: 'Are you flexible and pragmatic when reality shifts under you?',
        answer:
          'A clear example was the checkout latency work. The original plan to solve scaling pain was a full migration to containerised services, but as the urgency grew it became obvious we couldn\'t wait months. I pivoted the goal from "re-architect" to "get most of the win now without touching infrastructure" — researching Lambda tuning and cold-start fixes instead. We delivered a ~40% latency improvement quickly, then revisited the bigger architectural question later with the pressure off. Adapting meant being honest that the ideal plan no longer fit the constraints.',
      },
      {
        id: 'how-prioritize',
        question: 'How do you prioritize when everything feels urgent?',
        whatTheyAsk: 'Do you have a repeatable framework, or do you just react?',
        answer:
          'I anchor on impact and risk. I look at what unblocks the most people or customers, what carries the biggest risk if it slips (anything touching money or compliance goes to the top), and what has hard external dependencies. For estimation and sequencing I lean on complexity and our past velocity, and I sync with stakeholders and cross-functional teams who depend on the work so the order reflects reality, not just my view. I also build in buffer for testing and bug-fixing rather than assuming the happy path.',
      },
    ],
  },
  {
    id: 'driving-outcomes',
    name: 'Driving Outcomes & Ownership',
    blurb: 'Owning delivery end-to-end across the software development lifecycle.',
    questions: [
      {
        id: 'challenging-project',
        question: 'Walk me through the most challenging project you\'ve owned end-to-end.',
        whatTheyAsk: 'Can you own hard problems across the whole lifecycle and think in systems?',
        story: {
          situation:
            'I led a Consent Management system for our Platform-as-a-Service. Users from two separate legacy products, plus new users, all had to access the new platform — and every user had to give consent under new terms before proceeding.',
          task:
            'As feature lead: migrate existing consents from separate systems, and drive the email/prompt flows so users consented during authorization — all with zero downtime and full regulatory compliance.',
          action:
            'I gathered technical requirements with the tech lead/architect and business requirements from PM and BA. I worked closely with legal to meet every regulatory requirement, and with Customer Service to keep prompts frictionless. I sequenced the work, added buffer for testing, and synced continually with the cross-functional teams depending on it.',
          result:
            '545,000 users migrated and logged in with no downtime, no support escalations, and full compliance — all onto the new terms.',
        },
        tips: ['Hit the full lifecycle: requirements → scope/estimate → deliver → outcome.', 'Lead with scale and the zero-downtime constraint.'],
        followUps: ['How did you estimate it?', 'How did you handle blockers?', 'What would you do differently?'],
      },
      {
        id: 'anticipate-blockers',
        question: 'How do you anticipate and handle blockers?',
        whatTheyAsk: 'Are you proactive about risk, or do you only react once you\'re stuck?',
        answer:
          'I try to surface blockers during refinement, not after they hit. When one appears, I sort it into one of two buckets. First: the current approach still works but needs more time — then I communicate that early to the tech lead and re-set expectations rather than silently slipping. Second: the approach isn\'t feasible — then we look for alternatives or revisit the design before sinking more effort in. Either way the principle is the same: communicate early and don\'t let a blocker quietly become a missed deadline.',
      },
      {
        id: 'gather-requirements',
        question: 'How do you gather requirements, scope, and estimate a piece of work?',
        whatTheyAsk: 'Do you have a disciplined approach to planning, or do you just start coding?',
        answer:
          'I split requirements by source. For technical requirements I consult the tech lead or solution architect; for business requirements I gather from the PM and Business Analyst. For estimation I base it on complexity and our past velocity rather than gut feel, and I add buffer for testing and bug-fixing. Before committing I sync with the cross-functional teams relying on the feature, and I\'m deliberately detailed when refining tickets — most delivery pain traces back to vague tickets, so I\'d rather over-invest there.',
      },
      {
        id: 'code-quality-fast-paced',
        question: 'How do you ensure code quality in a fast-paced team?',
        whatTheyAsk: 'Do you keep a high bar without becoming a bottleneck? Is quality systematic or heroic?',
        answer:
          'I lean on lightweight guardrails that don\'t slow people down, because in a fast team quality can\'t depend on heroics. First, automate the boring checks: linting, type-checking and tests run in CI so nothing merges without passing — that\'s a big reason I pushed our migration to TypeScript, since strong typing catches a whole class of bugs before review. Second, small, reviewable PRs and clear standards, with review focused on the code and design rather than the person. Third, test coverage proportional to risk — anything touching money or compliance gets integration and E2E coverage (a lesson I learned the hard way after a change to a legacy service broke an existing flow). And finally observability, so when something does slip through we find out fast in production rather than from a customer. The principle is: automate what a machine can check so humans spend their attention on design and edge cases.',
        tips: [
          'Frame it as systematic guardrails, not "I review everything myself".',
          'Link concretely to your stories: TypeScript (prevention) and the E2E-coverage lesson (regression safety).',
        ],
      },
    ],
  },
  {
    id: 'motivation-fit',
    name: 'Motivation & Fit',
    blurb: 'Why this company, and how you talk about your own strengths and weaknesses.',
    questions: [
      {
        id: 'why-this-company',
        question: 'Why do you want to work at [this company] specifically?',
        whatTheyAsk: 'Have you actually researched us, or are you spraying applications? Is your interest genuine and specific?',
        answer:
          'Tailor this — generic answers are obvious. A strong structure has three beats: (1) Mission/product — connect something specific the company does to what you genuinely care about ("you\'re solving X, and reliable financial systems are exactly the kind of high-stakes problem I want to work on"). (2) The engineering challenge — name a concrete problem the role involves that maps to your background, so they picture you doing the job. (3) Growth & values — why this is the right environment for you to grow, and a value or way-of-working of theirs that resonates. End on "why them", not "why me", so they don\'t have to ask.',
        tips: [
          'Do real homework: recent product launches, press, eng blog, their stated values — cite one specific thing.',
          'Map their actual problems to your actual experience; avoid praise that could apply to any company.',
          'Fill the [bracket] in with the company before each interview — keep one tailored version per application.',
        ],
        followUps: ['What do you know about our product?', 'What attracts you over other companies you\'re interviewing with?'],
      },
      {
        id: 'manager-strengths-weaknesses',
        question: 'What would your current manager say are your biggest strengths and weaknesses?',
        whatTheyAsk: 'Are you self-aware and able to see yourself through someone else\'s eyes — honestly, not defensively?',
        answer:
          'On strengths, my manager would point to ownership and initiative — I tend to pick up problems that aren\'t strictly mine when they matter to the team or customers (like building the international-ID verification path, or driving the TypeScript migration), and I follow them through to a measurable result. They\'d also say I\'m a steady hand in messy situations — I\'ve been brought into struggling teams specifically to help unblock and de-escalate. On weaknesses, they\'d say the same thing I\'d say about myself: I\'m strongest in the technical space and have had to deliberately work on broader stakeholder communication and public speaking. They\'ve seen me improve it over the past year by presenting in chapter meetings and mentoring — so it\'s framed as a real gap I\'m actively closing, not a blind spot.',
        tips: [
          'Make the "manager\'s view" of the weakness match your own self-assessment — consistency reads as honesty.',
          'Back each strength with a one-line concrete example rather than an adjective.',
        ],
        followUps: ['Can you give an example of that strength in action?', 'What are you doing about the weakness?'],
      },
    ],
  },
  {
    id: 'feedback-transparency',
    name: 'Feedback & Transparency',
    blurb: 'Giving and receiving difficult feedback, and tactful honesty.',
    questions: [
      {
        id: 'difficult-feedback-given',
        question: 'Tell me about a time you gave difficult feedback or made a hard people-call.',
        whatTheyAsk: 'Can you be tactfully transparent when it\'s uncomfortable but necessary?',
        story: {
          situation:
            'In my first year on a team, we had two newly-hired senior engineers (15+ years, from big-corporate backgrounds), two juniors, and a young tech lead. The seniors wanted to work their own way and were very slow; the tech lead — a genuinely nice guy — never spoke up. He kept covering the seniors\' tasks, coaching the juniors, and answering to the business for our poor velocity, which was burning him out.',
          task:
            'I felt the team needed everyone held accountable, and the laid-back members needed to be pushed.',
          action:
            'I raised it candidly with the Head of Engineering (also my direct manager) when he asked my honest read on the team. I offered to help coach the juniors, and I encouraged the tech lead to stop absorbing everything himself and to speak up and address the seniors directly.',
          result:
            'One of the senior engineers moved to another team, our velocity went up about 20% over three sprints, and the tech lead\'s stress dropped noticeably.',
        },
        tips: ['Show tact and care — you supported the tech lead and coached juniors, not just complained.', 'Honesty in service of the team, not politics.'],
      },
      {
        id: 'feedback-given-received',
        question: 'How do you give and receive constructive feedback?',
        whatTheyAsk: 'Are you open to feedback, and thoughtful in how you deliver it?',
        answer:
          'For giving feedback, I scale it to severity. Something small, I raise as a suggestion and I\'m genuinely fine if the person takes it or not. If it\'s serious — say it affects delivery or the team — I\'ll have a direct one-on-one, and for the most serious cases I\'ll loop in the person\'s manager and let them know before I take any action, so it\'s never a surprise. For receiving feedback, I try to keep an open mindset and assume good intent; different people see things differently, and most feedback has something useful in it even when it stings. I\'d rather hear it early than discover the problem later.',
      },
      {
        id: 'difficult-conversation',
        question: 'What is your approach to difficult conversations and conflict?',
        whatTheyAsk: 'Do you handle hard conversations with an open, solution-focused mindset?',
        answer:
          'I go in with an open mindset and anchor on the shared goal. Even when two people start far apart, you can usually find common ground by stepping back to the mutual objective. I pick the moment — when both people are calm — and I adapt how I communicate to the person and the situation rather than using one style for everyone. The aim is a better outcome, not winning the conversation. If we genuinely can\'t reach agreement on something important, I\'ll bring in a manager to help, framed as getting unstuck rather than escalating against someone.',
      },
    ],
  },
  {
    id: 'learning-growth',
    name: 'Learning & Knowledge Sharing',
    blurb: 'Continuous learning, your toolkit, and spreading knowledge to others.',
    questions: [
      {
        id: 'apply-and-share-lessons',
        question: 'Tell me about a time you learned something and shared it with the wider team.',
        whatTheyAsk: 'Are you proactive about your own growth, and generous in spreading what you learn?',
        story: {
          situation:
            'Our serverless checkout was great for cost but, as traffic surged, customers hit slow responses (P95 ≈ 9s). A full container migration would take months.',
          task:
            'I wanted to fix it leanly — and, just as importantly, capture and share whatever I learned so others could reuse it.',
          action:
            'I spent two weeks deep in AWS monitoring, Lambda tuning, cold-start and bundle-size reduction, consulting an AWS SME. I built a POC and presented the findings to the engineering chapter rather than keeping them on my team.',
          result:
            'P95 latency dropped ~40% (≈9s → ≈5s), and because I\'d shared the approach, other serverless services across the business adopted the same optimisations.',
        },
        tips: ['The point isn\'t just the win — it\'s that you packaged the learning so others benefited.'],
      },
      {
        id: 'learning-toolkit',
        question: 'How do you stay current? What\'s your learning toolkit and methodology?',
        whatTheyAsk: 'Are you a self-directed, continuous learner?',
        answer:
          'I spend about 30 minutes each morning before work reading technology blogs. When I hit something genuinely interesting or useful, I share it in our engineering Slack channel so the team benefits too — that also forces me to actually understand it well enough to explain it. Beyond reading, I learn best by building: when I\'m evaluating something new I\'ll spin up a small spike or POC. And mentoring juniors has been a surprisingly good learning tool — explaining things sharpens my own understanding.',
      },
      {
        id: 'mentoring',
        question: 'Tell me about a time you mentored or coached someone.',
        whatTheyAsk: 'Do you invest in growing other engineers?',
        answer:
          'On a team with two struggling juniors and an overloaded tech lead, I offered to take on coaching the juniors so the lead wasn\'t carrying everything. My approach was less "give them the answer" and more rubber-ducking and brainstorming through problems together, so they built the reasoning themselves. It freed up the tech lead, the juniors ramped up faster, and honestly it sharpened my own understanding — explaining something is the best test of whether you really know it. Mentoring is also a big part of how I\'ve worked on my own communication: it forces me to explain technical ideas clearly to different audiences.',
      },
    ],
  },
];
