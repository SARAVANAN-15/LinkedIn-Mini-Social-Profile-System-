import React, { useState } from 'react';
import { PostCard, Card, Button, NotificationItem, LetterAvatar } from './components';
import { posts, currentUser, connections, notifications } from './data/staticData';
import './styles/styles.css';

/* ============================================
   FEED PAGE
   ============================================ */
export function Feed() {
  return (
    <div className="feed-container">
      <div className="feed-main">
        {/* Create Post Card */}
        <Card className="create-post">
          <div className="create-post-header">
            <LetterAvatar
              name={currentUser.name || 'User'}
              className="create-post-avatar"
            />
            <input
              type="text"
              placeholder="Start a post, try writing an image or video"
              className="create-post-input"
            />
          </div>
          <div className="create-post-footer">
            <button>📸 Photo</button>
            <button>🎥 Video</button>
            <button>📄 Document</button>
            <button>📅 Schedule</button>
          </div>
        </Card>

        {/* Posts Feed */}
        <div className="posts-list">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              author={post.author}
              avatar={post.avatar}
              timestamp={post.timestamp}
              content={post.content}
              image={post.image}
              likes={post.likes}
              comments={post.comments}
            />
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="feed-sidebar">
        <Card className="sidebar-widget">
          <h3>📰 News</h3>
          <div className="news-item">
            <span className="news-tag">Technology</span>
            <h4>React 18 Released</h4>
          </div>
          <div className="news-item">
            <span className="news-tag">Development</span>
            <h4>Web Dev Trends 2024</h4>
          </div>
          <div className="news-item">
            <span className="news-tag">Career</span>
            <h4>Tips for Technical Interviews</h4>
          </div>
        </Card>

        <Card className="sidebar-widget">
          <h3>👥 Suggested For You</h3>
          <div className="suggested-item">
            <p><strong>Emma Wilson</strong></p>
            <p>Product Designer</p>
            <button>+ Follow</button>
          </div>
          <div className="suggested-item">
            <p><strong>Chris Brown</strong></p>
            <p>Technical Writer</p>
            <button>+ Follow</button>
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ============================================
   PROFILE PAGE
   ============================================ */
export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingSection, setEditingSection] = useState(null);
  const [profile, setProfile] = useState(currentUser);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditingSection(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleAboutChange = (e) => {
    setProfile({ ...profile, about: e.target.value });
  };

  const handleExperienceChange = (id, field, value) => {
    setProfile({
      ...profile,
      experience: profile.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    });
  };

  const handleEducationChange = (id, field, value) => {
    setProfile({
      ...profile,
      education: profile.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    });
  };

  const handleSkillsChange = (e) => {
    setProfile({
      ...profile,
      skills: e.target.value.split(',').map(skill => skill.trim())
    });
  };

  const startEditingSection = (section) => {
    setEditingSection(editingSection === section ? null : section);
  };

  return (
    <div className="profile-container">
      <div className="profile-main">
        {/* Cover Image and Avatar */}
        <Card className="profile-header">
          <div className="profile-cover">
            <img src={profile.coverImage} alt="Cover" />
          </div>
          <div className="profile-avatar-section">
            <LetterAvatar name={profile.name} className="profile-avatar" />
          </div>
        </Card>

        {/* Profile Info */}
        <Card className="profile-info">
          {isEditing ? (
            <div className="profile-edit-form">
              <h2>Edit Profile</h2>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" value={profile.name} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Headline:</label>
                <input type="text" name="headline" value={profile.headline} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Location:</label>
                <input type="text" name="location" value={profile.location} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Bio:</label>
                <textarea name="bio" value={profile.bio} onChange={handleInputChange} rows="4"></textarea>
              </div>
              <div className="form-group">
                <label>Avatar URL:</label>
                <input type="text" name="avatar" value={profile.avatar} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={profile.email} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input type="text" name="phone" value={profile.phone} onChange={handleInputChange} />
              </div>
              <div className="form-actions">
                <Button text="💾 Save" variant="primary" onClick={handleEditToggle} />
                <Button text="❌ Cancel" variant="secondary" onClick={handleEditToggle} />
              </div>
            </div>
          ) : (
            <>
              <div className="profile-header-content">
                <h1>{profile.name}</h1>
                <p className="headline">{profile.headline}</p>
                <p className="location">📍 {profile.location}</p>
                <p className="bio">{profile.bio}</p>
              </div>

              <div className="profile-actions">
                <Button text="✏️ Edit Profile" variant="primary" onClick={handleEditToggle} />
                <Button text="⋮ More" variant="secondary" />
              </div>
            </>
          )}

          <div className="profile-stats">
            <div className="stat">
              <h3>{profile.connectionCount}</h3>
              <p>Connections</p>
            </div>
            <div className="stat">
              <h3>{profile.followers}</h3>
              <p>Followers</p>
            </div>
            <div className="stat">
              <h3>{profile.posts}</h3>
              <p>Posts</p>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="contact-info">
            <h3>📞 Contact Information</h3>
            <div className="contact-item">
              <span>Email:</span>
              <p>{profile.email}</p>
            </div>
            <div className="contact-item">
              <span>Phone:</span>
              <p>{profile.phone}</p>
            </div>
            <div className="contact-item">
              <span>Location:</span>
              <p>{profile.location}</p>
            </div>
          </div>
        </Card>

        {/* About Section */}
        <Card className="profile-section">
          <div className="section-header">
            <h2>📝 About</h2>
            <button className="edit-section-btn" onClick={() => startEditingSection('about')}>
              {editingSection === 'about' ? '❌' : '✏️'}
            </button>
          </div>
          {editingSection === 'about' ? (
            <div className="form-group">
              <textarea
                value={profile.about}
                onChange={handleAboutChange}
                rows="6"
                className="edit-textarea"
              ></textarea>
              <Button text="💾 Save" variant="primary" onClick={() => startEditingSection(null)} />
            </div>
          ) : (
            <p>{profile.about}</p>
          )}
        </Card>

        {/* Experience Section */}
        <Card className="profile-section">
          <div className="section-header">
            <h2>💼 Experience</h2>
            <button className="edit-section-btn" onClick={() => startEditingSection('experience')}>
              {editingSection === 'experience' ? '❌' : '✏️'}
            </button>
          </div>
          {editingSection === 'experience' ? (
            <div className="edit-section">
              {profile.experience.map((exp) => (
                <div key={exp.id} className="edit-item">
                  <div className="form-group">
                    <label>Job Title:</label>
                    <input
                      type="text"
                      value={exp.title}
                      onChange={(e) => handleExperienceChange(exp.id, 'title', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Company:</label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Duration:</label>
                    <input
                      type="text"
                      value={exp.duration}
                      onChange={(e) => handleExperienceChange(exp.id, 'duration', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description:</label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                      rows="3"
                    ></textarea>
                  </div>
                  <hr />
                </div>
              ))}
              <Button text="💾 Save" variant="primary" onClick={() => startEditingSection(null)} />
            </div>
          ) : (
            <>
              {profile.experience.map((exp) => (
                <div key={exp.id} className="experience-item">
                  <div className="experience-header">
                    <h3>{exp.title}</h3>
                    {exp.isCurrent && <span className="experience-badge">Current</span>}
                  </div>
                  <p className="company">{exp.company}</p>
                  <p className="duration">{exp.duration}</p>
                  <p className="description">{exp.description}</p>
                  {profile.experience.indexOf(exp) < profile.experience.length - 1 && <hr />}
                </div>
              ))}
            </>
          )}
        </Card>

        {/* Education Section */}
        <Card className="profile-section">
          <div className="section-header">
            <h2>🎓 Education</h2>
            <button className="edit-section-btn" onClick={() => startEditingSection('education')}>
              {editingSection === 'education' ? '❌' : '✏️'}
            </button>
          </div>
          {editingSection === 'education' ? (
            <div className="edit-section">
              {profile.education.map((edu) => (
                <div key={edu.id} className="edit-item">
                  <div className="form-group">
                    <label>Degree:</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>University:</label>
                    <input
                      type="text"
                      value={edu.university}
                      onChange={(e) => handleEducationChange(edu.id, 'university', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Year:</label>
                    <input
                      type="text"
                      value={edu.year}
                      onChange={(e) => handleEducationChange(edu.id, 'year', e.target.value)}
                    />
                  </div>
                  {edu.gpa && (
                    <div className="form-group">
                      <label>CGPA:</label>
                      <input
                        type="text"
                        value={edu.gpa}
                        onChange={(e) => handleEducationChange(edu.id, 'gpa', e.target.value)}
                      />
                    </div>
                  )}
                  <hr />
                </div>
              ))}
              <Button text="💾 Save" variant="primary" onClick={() => startEditingSection(null)} />
            </div>
          ) : (
            <>
              {profile.education.map((edu) => (
                <div key={edu.id} className="education-item">
                  <h3>{edu.degree}</h3>
                  <p className="university">{edu.university} • {edu.year}</p>
                  {edu.gpa && <p className="gpa">CGPA: {edu.gpa}</p>}
                  {profile.education.indexOf(edu) < profile.education.length - 1 && <hr />}
                </div>
              ))}
            </>
          )}
        </Card>

        {/* Skills Section */}
        <Card className="profile-section">
          <div className="section-header">
            <h2>🛠️ Skills & Endorsements</h2>
            <button className="edit-section-btn" onClick={() => startEditingSection('skills')}>
              {editingSection === 'skills' ? '❌' : '✏️'}
            </button>
          </div>
          {editingSection === 'skills' ? (
            <div className="form-group">
              <label>Skills (comma-separated):</label>
              <textarea
                value={profile.skills.join(', ')}
                onChange={handleSkillsChange}
                rows="4"
                className="edit-textarea"
              ></textarea>
              <Button text="💾 Save" variant="primary" onClick={() => startEditingSection(null)} />
            </div>
          ) : (
            <div className="skills-list">
              {profile.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

/* ============================================
   CONNECTIONS PAGE
   ============================================ */
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
          <Card className="browse-card">
            <LetterAvatar name="David Wilson" className="connection-avatar" />
            <h4>David Wilson</h4>
            <p>Software Architect</p>
            <p className="mutual">18 mutual connections</p>
            <button>+ Connect</button>
          </Card>
          <Card className="browse-card">
            <LetterAvatar name="Lisa Anderson" className="connection-avatar" />
            <h4>Lisa Anderson</h4>
            <p>Data Scientist</p>
            <p className="mutual">9 mutual connections</p>
            <button>+ Connect</button>
          </Card>
          <Card className="browse-card">
            <LetterAvatar name="Robert Martin" className="connection-avatar" />
            <h4>Robert Martin</h4>
            <p>Cloud Engineer</p>
            <p className="mutual">11 mutual connections</p>
            <button>+ Connect</button>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   NOTIFICATIONS PAGE
   ============================================ */
export function Notifications() {
  const [notificationList, setNotificationList] = useState(notifications);
  const [filterType, setFilterType] = useState('all');

  const filteredNotifications = filterType === 'all'
    ? notificationList
    : notificationList.filter((notif) => notif.type === filterType);

  const unreadCount = notificationList.filter((n) => !n.read).length;

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h1>🔔 Notifications</h1>
        {unreadCount > 0 && (
          <span className="unread-badge">{unreadCount} new</span>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="notification-filters-container">
        <button
          className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
          onClick={() => setFilterType('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${filterType === 'connection' ? 'active' : ''}`}
          onClick={() => setFilterType('connection')}
        >
          Connections
        </button>
        <button
          className={`filter-btn ${filterType === 'like' ? 'active' : ''}`}
          onClick={() => setFilterType('like')}
        >
          Likes
        </button>
        <button
          className={`filter-btn ${filterType === 'comment' ? 'active' : ''}`}
          onClick={() => setFilterType('comment')}
        >
          Comments
        </button>
        <button
          className={`filter-btn ${filterType === 'mention' ? 'active' : ''}`}
          onClick={() => setFilterType('mention')}
        >
          Mentions
        </button>
      </div>

      {/* Notifications List */}
      <div className="notifications-list">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              message={notification.message}
              avatar={notification.avatar}
              timestamp={notification.timestamp}
              read={notification.read}
            />
          ))
        ) : (
          <Card className="no-notifications">
            <p>No notifications to show</p>
          </Card>
        )}
      </div>

      {/* Mark as Read Button */}
      {unreadCount > 0 && (
        <Card className="mark-read-container">
          <button
            className="mark-all-btn"
            onClick={() =>
              setNotificationList(
                notificationList.map((n) => ({ ...n, read: true }))
              )
            }
          >
            Mark all as read
          </button>
        </Card>
      )}
    </div>
  );
}
