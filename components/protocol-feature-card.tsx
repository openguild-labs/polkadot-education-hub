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
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <img
        src={image}
        alt={title}
        width={200}
        height={'100%'}
        style={{ objectFit: 'contain', marginRight: -80, marginLeft: 50 }}
      />
    </div>
  );
};
