import Link from "next/link";

type TeamCardProps = {
  id: string;
  nama: string;
  jabatan: string;
};

export default function TeamCard({ id, nama, jabatan }: TeamCardProps) {
  return (
    <Link href={`/team/${id}`}>
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
        }}
      >
        <h3>{nama}</h3>
        <p>{jabatan}</p>
      </div>
    </Link>
  );
}