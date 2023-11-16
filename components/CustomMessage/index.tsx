export default function CustomMessage({
  text = "",
}: {
  text: string;
}): JSX.Element {
  return <h2 className="text-lg font-medium text-gray-600">{text}</h2>;
}
