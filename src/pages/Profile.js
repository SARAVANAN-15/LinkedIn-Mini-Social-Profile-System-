import React, { useState } from 'react';
import { Card, Button, LetterAvatar } from '../components';
import { currentUser } from '../data/staticData';
import '../styles/styles.css';

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
                <h1>{profile.name} <span className="verified-badge">✓</span></h1>
                <p className="headline">{profile.headline}</p>
                <div className="location-info">
                  <span className="location">📍 {profile.location}</span>
                  <span className="dot">•</span>
                  <span className="contact-link">Contact info</span>
                </div>
                
                <div className="open-to-frame">
                   <h4>Open to work</h4>
                   <p>Frontend Developer, Web Developer, UI/UX Designer roles</p>
                   <a>Show details</a>
                </div>
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
                  <LetterAvatar name={exp.company} className="experience-logo" />
                  <div className="experience-details">
                    <div className="experience-header">
                      <h3>{exp.title}</h3>
                      {exp.isCurrent && <span className="experience-badge">Current</span>}
                    </div>
                    <p className="company">{exp.company}</p>
                    <p className="duration">{exp.duration}</p>
                    <p className="description">{exp.description}</p>
                  </div>
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
                  <LetterAvatar name={edu.university} className="education-logo" />
                  <div className="education-details">
                    <h3>{edu.university}</h3>
                    <p className="degree">{edu.degree}</p>
                    <p className="duration">{edu.year}</p>
                    {edu.gpa && <p className="gpa">Grade: {edu.gpa}</p>}
                  </div>
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
