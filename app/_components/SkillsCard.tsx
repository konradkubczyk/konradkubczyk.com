import { outfit } from "@/app/fonts";

const MAX_CHUNK_SIZE = 5;

function chunkArray<T>(array: T[], maxChunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += maxChunkSize) {
    result.push(array.slice(i, i + maxChunkSize));
  }
  return result;
}

export default function SkillsCard({
  category,
  skills,
}: {
  category: string;
  skills: string[];
}) {
  return (
    <div className="flex flex-1 grow basis-64 flex-col gap-3 rounded-2xl bg-neutral-300/75 p-5 xl:basis-80 dark:bg-neutral-900/75">
      <h3
        className={`${outfit.className} text-xl text-neutral-800 sm:whitespace-nowrap sm:text-2xl dark:text-neutral-300`}
      >
        {category}
      </h3>
      <div className="flex gap-12">
        {chunkArray(skills, MAX_CHUNK_SIZE).map(
          (chunkOfSkills: string[], index) => (
            <ul key={index} className="list-inside list-disc">
              {chunkOfSkills.map((skill, index) => (
                <li key={index} className="whitespace-nowrap">
                  {skill}
                </li>
              ))}
            </ul>
          ),
        )}
      </div>
    </div>
  );
}
