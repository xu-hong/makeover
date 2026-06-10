window.AI_PREDICTION_MILESTONES = {
  sourceDataUrl: "file:///Users/hongxu/Downloads/ai_narrow_milestones_current_audit.csv",
  auditDate: "2026-06-10",
  framing: "2016 ESPAI fixed-probabilities framing; materialized rows only.",
  agiForecast: {
    id: "agi",
    label: "First general AI publicly announced",
    category: "General AI",
    p10: 2029.13,
    p50: 2032.92,
    p90: 2041.33,
    status: "forecast",
    source: "Metaculus snapshot",
    sourceDate: "2026-06-10",
    population: "1.9k Metaculus forecasters",
    sourceUrl:
      "https://www.metaculus.com/questions/5121/when-will-the-first-general-ai-system-be-devised-tested-and-publicly-announced/",
    note:
      "Metaculus dynamic community forecast snapshot captured on 2026-06-10."
  },
  milestones: [
    {
      id: "translate",
      label: "Translate as well as bilingual humans",
      category: "language",
      p10: 2019,
      p50: 2023,
      p90: 2031,
      materializedYear: 2018,
      status: "partial / narrower benchmark",
      evidenceUrl:
        "https://blogs.microsoft.com/ai/chinese-to-english-translator-milestone/"
    },
    {
      id: "class",
      label: "Correctly group unseen objects",
      category: "vision",
      p10: 2018,
      p50: 2020.5,
      p90: 2022.5,
      materializedYear: 2021,
      status: "likely achieved",
      evidenceUrl: "https://openai.com/index/clip/"
    },
    {
      id: "one_shot",
      label: "One-shot image labeling",
      category: "vision",
      p10: 2020.5,
      p50: 2024,
      p90: 2036,
      materializedYear: 2018,
      status: "partial / narrower benchmark",
      evidenceUrl:
        "https://www.microsoft.com/en-us/research/publication/memory-matching-networks-for-one-shot-image-recognition/"
    },
    {
      id: "video_scene",
      label: "Generate video from a photograph",
      category: "vision / generative media",
      p10: 2021,
      p50: 2026,
      p90: 2036,
      materializedYear: 2020,
      status: "likely achieved",
      evidenceUrl: "https://arxiv.org/abs/2012.12247"
    },
    {
      id: "transcribe",
      label: "Transcribe as well as humans",
      category: "speech",
      p10: 2021,
      p50: 2026,
      p90: 2036,
      materializedYear: 2022,
      status: "partial / close but not proven",
      evidenceUrl: "https://arxiv.org/abs/2212.04356"
    },
    {
      id: "read_aloud",
      label: "Read aloud better than humans",
      category: "speech",
      p10: 2021,
      p50: 2026,
      p90: 2031,
      materializedYear: 2022,
      status: "likely achieved",
      evidenceUrl: "https://arxiv.org/abs/2205.04421"
    },
    {
      id: "putnam",
      label: "Win Putnam competition",
      category: "math",
      p10: 2031,
      p50: 2051,
      p90: 2071,
      materializedYear: 2025,
      status: "likely achieved",
      evidenceUrl: "https://matharena.ai/putnam/"
    },
    {
      id: "starcraft",
      label: "Win Starcraft 2",
      category: "games",
      p10: 2018,
      p50: 2021,
      p90: 2026,
      materializedYear: 2019,
      status: "partial / close but not proven",
      evidenceUrl:
        "https://deepmind.google/blog/alphastar-mastering-the-real-time-strategy-game-starcraft-ii/"
    },
    {
      id: "rand_game",
      label: "Win any random computer game",
      category: "games",
      p10: 2021,
      p50: 2026,
      p90: 2031,
      materializedYear: 2025,
      status: "partial / narrower benchmark",
      evidenceUrl: "https://deepmind.google/blog/sima-generalist-ai-agent-for-3d-virtual-environments/"
    },
    {
      id: "atari",
      label: "Beat professionals at all Atari games",
      category: "games",
      p10: 2021,
      p50: 2026,
      p90: 2031,
      materializedYear: 2020,
      status: "achieved",
      evidenceUrl:
        "https://deepmind.google/blog/agent57-outperforming-the-human-atari-benchmark/"
    },
    {
      id: "atari_fifty",
      label: "Win Atari with 20 minutes training",
      category: "games",
      p10: 2018,
      p50: 2021,
      p90: 2026,
      materializedYear: 2021,
      status: "partial / close but not proven",
      evidenceUrl: "https://arxiv.org/abs/2111.00210"
    },
    {
      id: "race",
      label: "Beat a human in a 5km race",
      category: "robotics",
      p10: 2021,
      p50: 2026,
      p90: 2036,
      materializedYear: 2026,
      status: "achieved",
      evidenceUrl:
        "https://www.reuters.com/sports/humanoid-robots-race-past-humans-beijing-half-marathon-showing-rapid-advances-2026-04-19/"
    },
    {
      id: "sort",
      label: "Efficiently sort very large lists",
      category: "algorithms",
      p10: 2019,
      p50: 2021,
      p90: 2026,
      materializedYear: 2023,
      status: "likely achieved",
      evidenceUrl: "https://www.nature.com/articles/s41586-023-06004-9"
    },
    {
      id: "python",
      label: "Write good Python code",
      category: "coding",
      p10: 2019,
      p50: 2026,
      p90: 2036,
      materializedYear: 2021,
      status: "likely achieved",
      evidenceUrl: "https://arxiv.org/abs/2107.03374"
    },
    {
      id: "factoid",
      label: "Answer factoids better than experts",
      category: "question answering",
      p10: 2019,
      p50: 2021,
      p90: 2026,
      materializedYear: 2023,
      status: "partial / close but not proven",
      evidenceUrl: "https://aclanthology.org/2023.acl-long.307/"
    },
    {
      id: "open_quest",
      label: "Answer open-ended questions well",
      category: "question answering",
      p10: 2021,
      p50: 2026,
      p90: 2031,
      materializedYear: 2025,
      status: "partial / close but not proven",
      evidenceUrl: "https://deepresearch-bench.github.io/"
    },
    {
      id: "unkn_quest",
      label: "Answer unanswered questions well",
      category: "question answering",
      p10: 2020,
      p50: 2026,
      p90: 2033.5,
      materializedYear: 2022,
      status: "likely achieved",
      evidenceUrl: "https://openai.com/index/chatgpt/"
    },
    {
      id: "essay",
      label: "High marks for a high school essay",
      category: "writing",
      p10: 2018,
      p50: 2023,
      p90: 2031,
      materializedYear: 2023,
      status: "likely achieved",
      evidenceUrl: "https://arxiv.org/abs/2302.04335"
    },
    {
      id: "poker",
      label: "Win World Series of Poker",
      category: "games",
      p10: 2017,
      p50: 2019,
      p90: 2021.5,
      materializedYear: 2019,
      status: "likely achieved",
      evidenceUrl:
        "https://www.cmu.edu/news/stories/archives/2019/july/cmu-facebook-ai-beats-poker-pros.html"
    },
    {
      id: "laws_phys",
      label: "Output laws of physics of virtual world",
      category: "science reasoning",
      p10: 2021,
      p50: 2026,
      p90: 2036,
      materializedYear: 2021,
      status: "partial / narrower benchmark",
      evidenceUrl: "https://arxiv.org/abs/1905.11481"
    }
  ]
};
