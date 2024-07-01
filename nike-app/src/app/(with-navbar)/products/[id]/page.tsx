export default function DetailProduct({
  params,
}: {
  readonly params: { id: string };
}) {
  return <h1>Detail Product {params.id}</h1>;
}
