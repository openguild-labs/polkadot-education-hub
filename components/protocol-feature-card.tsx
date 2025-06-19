export const ProtocolFeatureCard = ({
  icon,
  title,
  description,
  image,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="rounded-xl overflow-hidden flex justify-between text-left bg-white p-6 shadow-md transition-all duration-300">
      <div>
        <div className="flex items-center space-x-4">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300">
            {icon}
          </div>
          <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white font-unbounded">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-md font-unbounded">{description}</p>
      </div>
      <img
        src={image}
        alt={title}
        width={200}
        height={'100%'}
        className="hidden md:flex"
        style={{ objectFit: 'contain', marginRight: -80, marginLeft: 50, marginTop: 20 }}
      />
    </div>
  );
};
