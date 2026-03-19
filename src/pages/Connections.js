import React, { useState } from 'react';
import { Card, Button, LetterAvatar } from '../components';
import { connections } from '../data/staticData';
import '../styles/styles.css';

export function Connections() {
  const [filteredConnections, setFilteredConnections] = useState(connections);
  const [searchTerm, setSearchTerm] = useState('');
  const [connectedIds, setConnectedIds] = useState(new Set());

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = connections.filter(
      (conn) =>
        conn.name.toLowerCase().includes(term) ||
        conn.role.toLowerCase().includes(term)
    );
    setFilteredConnections(filtered);
  };

  const handleConnect = (id) => {
    const newConnectedIds = new Set(connectedIds);
    if (newConnectedIds.has(id)) {
      newConnectedIds.delete(id);
    } else {
      newConnectedIds.add(id);
    }
    setConnectedIds(newConnectedIds);
  };

  return (
    <div className="connections-container">
      <div className="connections-header">
        <h1>💼 My Connections</h1>
        <p>You have {connections.length} connections</p>
      </div>

      <Card className="connections-search">
        <input
          type="text"
          placeholder="Search connections by name or role..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </Card>

      <div className="connections-grid">
        {filteredConnections.length > 0 ? (
          filteredConnections.map((connection) => (
            <Card key={connection.id} className="connection-card">
              <LetterAvatar name={connection.name} className="connection-avatar" />
              <h4>{connection.name}</h4>
              <p>{connection.role}</p>
              <p className="mutual">{connection.mutualConnections} mutual connections</p>
              <div className="connection-actions">
                <Button 
                  text={connectedIds.has(connection.id) ? '✓ Connected' : 'Connect'} 
                  variant={connectedIds.has(connection.id) ? 'success' : 'primary'} 
                  size="small"
                  onClick={() => handleConnect(connection.id)}
                />
                <Button text="Message" variant="secondary" size="small" />
              </div>
            </Card>
          ))
        ) : (
          <p className="no-results">No connections found</p>
        )}
      </div>

      {/* Browse Section */}
      <div className="browse-section">
        <h2>👥 Browse Professionals</h2>
        <div className="connections-grid">
          <Card className="connection-card">
            <div className="connection-cover"></div>
            <LetterAvatar name="David Wilson" className="connection-avatar" />
            <div className="connection-info">
              <h4>David Wilson</h4>
              <p>Software Architect</p>
              <p className="mutual">18 mutual connections</p>
            </div>
            <div className="connection-actions">
              <Button text="+ Connect" variant="primary" size="small" />
            </div>
          </Card>
          
          <Card className="connection-card">
            <div className="connection-cover"></div>
            <LetterAvatar name="Lisa Anderson" className="connection-avatar" />
            <div className="connection-info">
              <h4>Lisa Anderson</h4>
              <p>Data Scientist</p>
              <p className="mutual">9 mutual connections</p>
            </div>
            <div className="connection-actions">
              <Button text="+ Connect" variant="primary" size="small" />
            </div>
          </Card>
          
          <Card className="connection-card">
            <div className="connection-cover"></div>
            <LetterAvatar name="Robert Martin" className="connection-avatar" />
            <div className="connection-info">
              <h4>Robert Martin</h4>
              <p>Cloud Engineer</p>
              <p className="mutual">11 mutual connections</p>
            </div>
            <div className="connection-actions">
              <Button text="+ Connect" variant="primary" size="small" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
