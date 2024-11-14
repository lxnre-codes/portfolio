import * as simpleIcons from "simple-icons";

interface IconProps {
  slug: string;
  size?: number;
  color?: string;
  className?: string;
}

const getIconData = (slug: simpleIcons.SimpleIcon["slug"]) => {
  const name = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
  //@ts-expect-error - simple-icons does not have a sophisticated type definition
  const iconData: simpleIcons.SimpleIcon | undefined = simpleIcons[name];

  if (!iconData) {
    console.warn(`Icon not found: ${slug}`);
    return null;
  }
  return iconData;
};

const Icon = ({
  slug,
  size = 24,
  color = "currentColor",
  className = "",
}: IconProps) => {
  const iconData = getIconData(slug);

  // extract svg from icondata.svg text
  return iconData ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={iconData?.svg.match(/viewBox="([^"]*)"/)?.[1]}
      width={size}
      height={size}
      fill={color}
      className={className}
      dangerouslySetInnerHTML={{ __html: iconData?.svg }}
    />
  ) : null;
};

export default Icon;
