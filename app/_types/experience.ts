export type ExperienceItem = {
  role: string;
  timeframe: {
    start: string;
    end?: string;
  };
};

export type Experience = ExperienceItem[];
