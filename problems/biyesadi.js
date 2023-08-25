const polapain = [
    { name: "Abul", job: "sorkari", salary: 17000 },
    { name: "Babul", job: "besorkari", salary: 25000 },
    { name: "Kabul", job: "sorkari", salary: 21000 },
    { name: "Habul", job: "besorkari", salary: 47000 },
    { name: "Jabul", job: "sorkari", salary: 23000 },
    { name: "Mabul", job: "besorkari", salary: 55000 },
  ];

  const vaggobans = polapain.filter((pola) => (pola.job === "sorkari" && pola.salary >=20000) || (pola.job === 'besorkari' && pola.salary >=40000))
  console.log(vaggobans)
  const number = Math.random();
  console.log(number*vaggobans.length)
  const polaNumber = Math.floor(number*vaggobans.length)
  
  const finalJamai = vaggobans[polaNumber].name;
  console.log(`${finalJamai}, Tumi jitso...!`)

  


