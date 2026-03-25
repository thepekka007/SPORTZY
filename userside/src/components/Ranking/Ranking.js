import React, { useState } from "react";
import { Badge, Container, Row, Col, Card, Form, Tabs, Tab } from "react-bootstrap";

// Mock Data
const CLUB_RANKINGS = {
  cricket: [
    { rank: 1, name: "Kochi Tigers SC", matches: 45, wins: 38, points: 114, location: "Kochi" },
    { rank: 2, name: "Calicut Challengers", matches: 42, wins: 32, points: 96, location: "Calicut" },
    { rank: 3, name: "Trivandrum United", matches: 40, wins: 28, points: 84, location: "Trivandrum" },
    { rank: 4, name: "Thrissur Titans", matches: 38, wins: 24, points: 72, location: "Thrissur" },
    { rank: 5, name: "Kannur Warriors", matches: 35, wins: 20, points: 60, location: "Kannur" },
  ],
  football: [
    { rank: 1, name: "Malappuram FC", matches: 38, wins: 30, points: 90, location: "Malappuram" },
    { rank: 2, name: "Kochi Blues", matches: 38, wins: 28, points: 84, location: "Kochi" },
    { rank: 3, name: "Trivandrum FC", matches: 38, wins: 25, points: 75, location: "Trivandrum" },
  ],
};

const PLAYER_RANKINGS = {
  cricket: [
    { rank: 1, name: "Rahul Krishna", club: "Kochi Tigers SC", matches: 45, points: 2850, stats: "Avg: 65.5" },
    { rank: 2, name: "Rajesh Kumar", club: "Calicut Challengers", matches: 42, points: 2640, stats: "Avg: 58.2" },
    { rank: 3, name: "Aditya Varma", club: "Trivandrum United", matches: 40, points: 2400, stats: "Avg: 52.8" },
  ],
  football: [
    { rank: 1, name: "Ashwin Jose", club: "Malappuram FC", matches: 38, points: 1520, stats: "Goals: 28" },
    { rank: 2, name: "Kevin Thomas", club: "Kochi Blues", matches: 38, points: 1368, stats: "Goals: 24" },
    { rank: 3, name: "Bibin George", club: "Trivandrum FC", matches: 38, points: 1200, stats: "Goals: 20" },
  ],
};

const SPORTS = [
  { value: "cricket", label: "Cricket" },
  { value: "football", label: "Football" },
];

// Rank Badges
const getRankBadge = (rank) => {
  if (rank === 1) return <Badge bg="warning text-dark">🥇 {rank}</Badge>;
  if (rank === 2) return <Badge bg="secondary">🥈 {rank}</Badge>;
  if (rank === 3) return <Badge bg="warning">🥉 {rank}</Badge>;
  return <Badge bg="light" text="dark">{rank}</Badge>;
};

export default function RankingsDashboard() {
  const [selectedSport, setSelectedSport] = useState("cricket");
  const [activeTab, setActiveTab] = useState("clubs");

  return (
    <Container className="mt-5">
      <h2>Kerala Sports Rankings</h2>
      <p className="text-muted">View club and player rankings across different sports</p>

      {/* Sport Selector */}
      <Form.Select
        className="mb-4 w-50"
        value={selectedSport}
        onChange={(e) => setSelectedSport(e.target.value)}
      >
        {SPORTS.map((sport) => (
          <option key={sport.value} value={sport.value}>
            {sport.label}
          </option>
        ))}
      </Form.Select>

      {/* Tabs */}
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-3"
      >
        {/* Club Rankings */}
        <Tab eventKey="clubs" title="Club Rankings" key={selectedSport + "-clubs"}>
          <Row xs={1} sm={2} md={3} className="g-4">
            {CLUB_RANKINGS[selectedSport].map((club) => (
              <Col key={club.rank}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      {getRankBadge(club.rank)}
                      <span className="text-muted">{club.location}</span>
                    </div>
                    <Card.Title>{club.name}</Card.Title>
                    <Row className="mt-2 text-center">
                      <Col>
                        <p className="mb-0 fw-bold">{club.matches}</p>
                        <small>Matches</small>
                      </Col>
                      <Col>
                        <p className="mb-0 fw-bold text-success">{club.wins}</p>
                        <small>Wins</small>
                      </Col>
                      <Col>
                        <p className="mb-0 fw-bold text-primary">{club.points}</p>
                        <small>Points</small>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>

        {/* Player Rankings */}
        <Tab eventKey="players" title="Player Rankings" key={selectedSport + "-players"}>
          <Row xs={1} sm={2} md={3} className="g-4">
            {PLAYER_RANKINGS[selectedSport].map((player) => (
              <Col key={player.rank}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      {getRankBadge(player.rank)}
                      <Badge bg="info">{player.club}</Badge>
                    </div>
                    <Card.Title>{player.name}</Card.Title>
                    <Row className="mt-2 text-center">
                      <Col>
                        <p className="mb-0 fw-bold">{player.matches}</p>
                        <small>Matches</small>
                      </Col>
                      <Col>
                        <p className="mb-0 fw-bold text-primary">{player.points}</p>
                        <small>Points</small>
                      </Col>
                    </Row>
                    <small className="text-muted">{player.stats}</small>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
}