
export default function ServiceItem({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>{params.id} service ID</h1>
    </div>
  );
}
