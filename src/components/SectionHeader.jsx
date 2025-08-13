const SectionHeader = ({
  subtitle,
  title,
  subtitleClass = '',
  titleClass = '',
  className = '',
}) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {subtitle && (
        <h2 className={`text-lg font-extrabold text-primary ${subtitleClass}`}>
          {subtitle}
        </h2>
      )}
      {title && (
        <h1
          className={`text-xl sm:text-2xl lg:text-3xl font-medium mt-2 text-base-color ${titleClass}`}
        >
          {title}
        </h1>
      )}
    </div>
  );
};

export default SectionHeader;
