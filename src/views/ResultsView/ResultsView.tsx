import React from "react";

import { Container } from "./results-view.styles";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Heading } from "@chakra-ui/react";

import resultados_cinquenta from "./resultados/50.json";

export default function ResultsView() {
  const getBiggestWeight = (weights: any) => {
    const { POSITIVO, NEGATIVO, NEUTRO } = weights;

    if (POSITIVO > NEGATIVO && POSITIVO > NEUTRO)
      return 'POSITIVO';

    if (NEGATIVO > POSITIVO && NEGATIVO > NEUTRO)
      return 'NEGATIVO';

    if (NEUTRO > POSITIVO && NEUTRO > NEGATIVO)
      return 'NEUTRO';

    return 'POSITIVO';
  };

  const precisao = 5;

  return (
    <>
      <Navbar />
      <Container>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', marginInline: '50px' }}>
          <Heading>Resultado: Treinamento com 50 textos pré-processados e classificados</Heading>
          <Table variant='simple' size="sm">
            <TableCaption>Resultados do treinamento para 50 sets</TableCaption>
            <Thead>
              <Tr>
                <Th>Texto</Th>
                <Th isNumeric>Negativo (Peso)</Th>
                <Th isNumeric>Neutro (Peso)</Th>
                <Th isNumeric>Positivo (Peso)</Th>
              </Tr>
            </Thead>
            <Tbody>
              {resultados_cinquenta.map(item => (
                <Tr key={item.previsao.POSITIVO}>
                  <Td>{item.texto}</Td>
                  <Td isNumeric
                    bgColor={getBiggestWeight(item.previsao) === "NEGATIVO" ? "red.500" : "white "}
                    color={getBiggestWeight(item.previsao) === "NEGATIVO" ? "white" : "black "}
                  >{item.previsao.NEGATIVO.toFixed(precisao)}</Td>
                  <Td isNumeric
                    bgColor={getBiggestWeight(item.previsao) === "NEUTRO" ? "#333" : "white "}
                    color={getBiggestWeight(item.previsao) === "NEUTRO" ? "white" : "black "}
                  >{item.previsao.NEUTRO.toFixed(precisao)}</Td>
                  <Td isNumeric
                    bgColor={getBiggestWeight(item.previsao) === "POSITIVO" ? "green" : "white "}
                    color={getBiggestWeight(item.previsao) === "POSITIVO" ? "white" : "black "}
                  >{item.previsao.POSITIVO.toFixed(precisao)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
      </Container>
      <Footer />
    </>
  );
}
