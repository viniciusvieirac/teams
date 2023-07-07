import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.team.createMany({
    data: [
      {
        name: 'Club de Regatas Vasco da Gama',
        country: 'Rio de Janeiro - RJ, Brasil',
        league: 'Brasileirão A',
        coach: '',
        stadium: 'São Januário',
        founded: new Date('21/08/1898'),
        logo: 'https://static.vasco.com.br/wp-content/uploads/2021/09/ESCUDO-VASCO-RGB.png',
        titles: `Taça Copa Libertadores da América
        1 título
        1998
        Taça
        Campeonato Brasileiro
        4 títulos
        1974, 1989, 1997 e 2000
        Taça
        Campeonato Brasileiro - Série B
        1 título
        2009
        Taça
        Recopa Sul-Americana
        2 títulos
        1993 e 1994
        Taça
        Campeonato Sul-Americano de Clubes
        1 título
        1948
        Taça
        Copa Mercosul
        1 título
        2000
        Taça
        Torneio Rio-São Paulo
        3 títulos
        1958, 1966 e 1999
        Taça
        Copa do Brasil
        1 título
        2011
        Taça
        Campeonato Carioca
        22 títulos
        1923, 1924, 1929, 1934, 1936, 1945, 1947
        1949, 1950, 1952, 1956, 1958, 1970, 1977
        1982, 1987, 1988, 1992, 1993, 1994, 1998 e 2003`,
        idols: `
        Ademir de Menezes
        Augusto
        Barbosa
        Bellini
        Danilo
        Edmundo
        Ely
        Juninho Pernambucano
        Roberto Dinamite
        Romário`,
        fans: '13.292.800',
      },
      {
        name: 'Fluminense Football Club',
        country: 'Rio de Janeiro - RJ, Brasil',
        league: 'Brasileirão A',
        coach: 'Fernando Diniz',
        stadium: 'Estádio de Laranjeiras',
        founded: new Date('21/07/1902'),
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Fluminense_fc_logo.svg/1200px-Fluminense_fc_logo.svg.png',
        titles: `taça
        Campeonato Brasileiro
        4 títulos
        1970, 1984, 2010 e 2012
        taça
        Copa do Brasil
        1 título
        2007
        taça
        Campeonato Brasileiro - Série C
        1 título
        1999
        taça
        Copa Rio
        1 título
        1952
        taça
        Torneio Rio-São Paulo
        2 títulos
        1957 e 1960
        taça
        Campeonato Carioca
        30 títulos
        1906, 1907, 1908, 1909, 1911, 1917, 1918
        1919, 1924, 1936, 1937, 1938, 1940, 1941
        1946, 1951, 1959, 1964, 1969, 1971, 1973
        1975, 1976, 1980, 1983, 1984, 1985, 1995
        2002 e 2005`,
        idols: `
        Assis
        Branco
        Carlos Alberto Torres
        Castilho
        Didi
        Edinho
        Fred
        Gérson
        Paulo César Caju
        Rivellino
        Telê Santana`,
        fans: '5.700.000',
      },
    ],
  });
}

seed()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
