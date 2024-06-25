export const Career = ({ company, href, position, period }: { company: string; href?: string; position: string; period: string }) => (
  <h3 className="flex w-full items-center">
    {href ? (
      <a className="font-bold underline" href={href}>
        {company}
      </a>
    ) : (
      <strong className="font-bold">{company}</strong>
    )}
    , {position}
    <small className="ml-auto text-gray-500">{period}</small>
  </h3>
);

export const Experience = ({ title, descriptions }: { title?: string; descriptions: string[] }) => (
  <div className="ml-6">
    {title ? <strong className="mt-7 block">[{title}]</strong> : null}
    <ul className="mt-1">
      {descriptions.map((desc, idx) => (
        <li key={idx} className="my-0">
          {desc}
        </li>
      ))}
    </ul>
  </div>
);
