import TeamCard from "@/components/TeamCard";

const team = [
  { id: "1", nama: "Chris Julian", jabatan: "CEO", deskripsi: "Pendiri dan pemimpin perusahaan." },
  { id: "2", nama: "Siti Aminah", jabatan: "Barista", deskripsi: "Meracik kopi dengan sepenuh hati." },
  { id: "3", nama: "Johnny Wijaya", jabatan: "Manager", deskripsi: "Mengatur operasional kedai." },
];

export default function TeamPage() {
  return (
    <main className="container">
      <h1>Tim Kami</h1>
      <div className="grid">
        {team.map((orang) => (
          <TeamCard
            key={orang.id}
            id={orang.id}
            nama={orang.nama}
            jabatan={orang.jabatan}
          />
        ))}
      </div>
    </main>
  );
}