type Props = {
  progress: number;
};
const ProgressBar = ({ progress = 0 }: Props) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 rounded-full h-2.5"
        style={{ width: progress + "%" }}
      />
    </div>
  );
};

export default ProgressBar;
