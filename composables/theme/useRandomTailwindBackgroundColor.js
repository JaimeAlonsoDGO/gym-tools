export default function useRandomTailwindBackgroundColor() {
  const tailwindColors = [
    'bg-gray-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-pink-500',
  ];
  return tailwindColors[Math.floor(Math.random() * tailwindColors.length)];
}
