import Edit from "@/components/pages/Edit";

type Props = {
  params: {
    id: string;
  };
};
const EditPage = ({ params: { id } }: Props) => {
  return <Edit id={id} />;
};

export default EditPage;
