'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

export default function Menu() {
  const params = useParams();
  const pathName = usePathname();

  const [pageChanges, setPageChanges] = React.useState(0);

  React.useEffect(() => {
    setPageChanges(prevState => (prevState += 1));
    console.log('Rota mudou', pathName);
  }, [pathName]);

  return (
    <>
      Trocas de página: {pageChanges}
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/sobre">Sobre</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/imc">IMC</Link>
        </li>
        <li>
          <Link href="/produtos">Produtos</Link>
        </li>
        <li>
          <Link href="/produtos/adicionar">Adicionar produto</Link>
        </li>
        <li>
          <Link href="/cursos">Cursos</Link>
        </li>
        <li>
          <Link href="/acoes-server">Ações Server</Link>
        </li>
        <li>
          <Link href="/acoes-client">Ações Client</Link>
        </li>
        <li>
          <Link href="/cookie">Cookie</Link>
        </li>
        <li>
          <Link href="/acoes-cache">Ações Cache</Link>
        </li>
      </ul>
    </>
  );
}
