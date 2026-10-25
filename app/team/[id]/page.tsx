import Link from "next/link";

const team = [
  { id: "1", nama: "Budi Santoso", jabatan: "CEO", deskripsi: "Pendiri dan pemimpin perusahaan." },
  { id: "2", nama: "Siti Aminah", jabatan: "Barista", deskripsi: "Meracik kopi dengan sepenuh hati." },
  { id: "3", nama: "Andi Wijaya", jabatan: "Manager", deskripsi: "Mengatur operasional kedai." },
];

export function generateStaticParams() {
  return team.map((orang) => ({ id: orang.id }));
}

export default async function TeamDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const orang = team.find((o) => o.id === id);

  if (!orang) {
    return (
      <main className="container">
        <h1>Anggota tidak ditemukan</h1>
        <Link href="/team">← Kembali</Link>
      </main>
    );
  }

  return (
    <main className="container">
      <h1>{orang.nama}</h1>
      <h2>{orang.jabatan}</h2>
      <p>{orang.deskripsi}</p>
      <br />
      <Link href="/team">← Kembali ke daftar tim</Link>
    </main>
  );
}