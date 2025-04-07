import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bubble, Doughnut, Line, Pie } from "react-chartjs-2";

import styled from "styled-components";

const Container = styled.div`
  width: 50vw;
  height: 50vh;
  margin: auto;
`;

export function ChartTest2() {
  return (
    <>
      <h3>Bubble 차트</h3>
      <Container>
        <Bubble
          data={{
            datasets: [
              {
                label: "First Dataset",
                data: [
                  {
                    x: 20,
                    y: 30,
                    r: 15,
                  },
                  {
                    x: 24,
                    y: 26,
                    r: 25,
                  },
                  {
                    x: 40,
                    y: 10,
                    r: 10,
                  },
                ],
                backgroundColor: "rgb(255, 99, 132)",
              },
            ],
          }}
        />
      </Container>
      <h3>도넛 차트</h3>
      <Container>
        <Doughnut
          data={{
            labels: ["Red", "Blue", "Yellow"],
            datasets: [
              {
                label: "My First Dataset",
                data: [300, 50, 100],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </Container>
      <h3>파이 차트</h3>
      <Container>
        <Pie
          data={{
            labels: ["Red", "Blue", "Yellow"],
            datasets: [
              {
                label: "My First Dataset",
                data: [300, 50, 100],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </Container>
      <h3>라인 차트</h3>
      <Container>
        <Line
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: [
              {
                label: "My First Dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          }}
        />
      </Container>
    </>
  );
}
