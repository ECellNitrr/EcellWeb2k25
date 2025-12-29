// About E-Cell Component - Pure JavaScript Version
// No React required - works with vanilla HTML

function createAboutECell() {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'about-ecell-section';
  
  section.innerHTML = `
    <!-- Tech Background Effects -->
    <div class="tech-background">
      <!-- Animated Grid Pattern -->
      <div class="grid-pattern"></div>
      
      <!-- Floating Tech Elements -->
      <div class="floating-element circle-1"></div>
      <div class="floating-element square-1"></div>
      <div class="floating-element rect-1"></div>
      <div class="floating-element circle-2"></div>
      
      <!-- Gradient Orbs -->
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      
      <!-- Circuit Lines -->
      <svg class="circuit-svg" viewBox="0 0 1000 1000">
        <path d="M100,100 L200,100 L200,200 L300,200" stroke="url(#circuit-gradient)" stroke-width="2" fill="none" class="circuit-path path-1" />
        <path d="M800,800 L700,800 L700,700 L600,700" stroke="url(#circuit-gradient)" stroke-width="2" fill="none" class="circuit-path path-2" />
        <path d="M100,800 L200,800 L200,700 L300,700" stroke="url(#circuit-gradient)" stroke-width="2" fill="none" class="circuit-path path-3" />
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="hsl(187, 100%, 55%)" />
            <stop offset="100%" stop-color="hsl(200, 100%, 60%)" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="container">
      <!-- Main Introduction -->
      <div class="intro-section">
        <div class="hero-card">
          <div class="decorative-blob blob-1"></div>
          <div class="decorative-blob blob-2"></div>
          
          <div class="hero-content">
            <!-- Main Tagline -->
            <div class="tagline-section">
              <div class="badge">
                <span class="pulse-dot"></span>
                <span class="badge-text">STUDENT-RUN • NON-PROFIT • SINCE 2010</span>
                <span class="pulse-dot pulse-delay"></span>
              </div>
              
              <h3 class="main-heading">
                Converting <span class="gradient-text">Dreamers</span>
                <br />
                Into <span class="gradient-text">Doers</span>
              </h3>
              
              <p class="subtitle">
                A self-driven community under sagacious guidance, building the entrepreneurial future of India
              </p>
            </div>

            <!-- Key Description Cards -->
            <div class="description-cards">
              <!-- Card 1 -->
              <div class="desc-card">
                <div class="card-overlay"></div>
                <div class="card-inner">
                  <div class="icon-box icon-primary">
                    <span class="emoji">🚀</span>
                  </div>
                  <div>
                    <h4 class="card-title">Our Beginning</h4>
                    <p class="card-text">
                      After a humble beginning in <span class="highlight-primary">2010</span>, we've expanded our networks across India, establishing links with angel investors, organizations, and accomplished entrepreneurs.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Card 2 -->
              <div class="desc-card">
                <div class="card-overlay"></div>
                <div class="card-inner">
                  <div class="icon-box icon-accent">
                    <span class="emoji">🎯</span>
                  </div>
                  <div>
                    <h4 class="card-title">E-Summit Excellence</h4>
                    <p class="card-text">
                      Our flagship <span class="highlight-accent">E-Summit</span> brings speakers from diverse backgrounds, providing platforms for startups to access seed funding and mentorship.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Card 3 -->
              <div class="desc-card">
                <div class="card-overlay"></div>
                <div class="card-inner">
                  <div class="icon-box icon-secondary">
                    <span class="emoji">💡</span>
                  </div>
                  <div>
                    <h4 class="card-title">Breaking Barriers</h4>
                    <p class="card-text">
                      We help youth break prejudices associated with entrepreneurship through fresh ideas, mentorship programs, and workshops by industry pioneers.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Card 4 -->
              <div class="desc-card">
                <div class="card-overlay"></div>
                <div class="card-inner">
                  <div class="icon-box icon-primary">
                    <span class="emoji">🤝</span>
                  </div>
                  <div>
                    <h4 class="card-title">Resources & Support</h4>
                    <p class="card-text">
                      Access to seed funding, mentorship programs, interactive speaker sessions, and workshops that transform ideas into sustainable ventures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stats Section -->
            <div class="stats-grid">
              <div class="stat-card stat-primary">
                <div class="stat-overlay"></div>
                <div class="stat-content">
                  <div class="stat-icon">📅</div>
                  <div class="stat-number">2010</div>
                  <div class="stat-label">ESTABLISHED</div>
                </div>
              </div>
              
              <div class="stat-card stat-accent">
                <div class="stat-overlay"></div>
                <div class="stat-content">
                  <div class="stat-icon">🌍</div>
                  <div class="stat-number">PAN INDIA</div>
                  <div class="stat-label">NETWORK</div>
                </div>
              </div>
              
              <div class="stat-card stat-secondary">
                <div class="stat-overlay"></div>
                <div class="stat-content">
                  <div class="stat-icon">🎪</div>
                  <div class="stat-number">E-SUMMIT</div>
                  <div class="stat-label">FLAGSHIP EVENT</div>
                </div>
              </div>
              
              <div class="stat-card stat-primary">
                <div class="stat-overlay"></div>
                <div class="stat-content">
                  <div class="stat-icon">💰</div>
                  <div class="stat-number">SEED FUNDING</div>
                  <div class="stat-label">QUICK ACCESS</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quote Section -->
        <div class="quote-section">
          <div class="quote-card">
            <svg class="quote-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p class="quote-text">
              "We are a bunch of self-driven folks who strive hard to convert dreamers into doers"
            </p>
            <div class="quote-footer">
              <div class="quote-line"></div>
              <span class="quote-author">E-CELL NIT RAIPUR</span>
              <div class="quote-line"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Our Journey -->
      <div class="journey-section">
        <div class="section-header">
          <h3 class="section-title">
            <span class="title-highlight">OUR</span> JOURNEY
          </h3>
          <p class="section-subtitle">From humble beginnings to a powerhouse of innovation</p>
        </div>

        <div class="journey-content">
          <!-- Image Section -->
          <div class="journey-image">
            <div class="image-glow"></div>
            <div class="image-wrapper">
              <img
                src="./assets/ecell-team.jpeg"
                alt="E-Cell Team NIT Raipur"
                class="team-image"
              />
              <div class="image-overlay"></div>
              <div class="image-caption">
                <div class="caption-header">
                  <div class="caption-icon">
                    <span>🚀</span>
                  </div>
                  <div>
                    <p class="caption-title">E-Cell Team</p>
                    <p class="caption-subtitle">NIT Raipur</p>
                  </div>
                </div>
                <div class="caption-tags">
                  <span class="tag">INNOVATORS</span>
                  <span class="tag">LEADERS</span>
                  <span class="tag">DOERS</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Content Section -->
          <div class="journey-timeline">
            <!-- Timeline Item 1 -->
            <div class="timeline-item">
              <div class="timeline-marker">
                <div class="marker-circle marker-primary">
                  <span class="marker-number">1</span>
                </div>
                <div class="marker-line"></div>
              </div>
              <div class="timeline-content">
                <div class="timeline-card">
                  <h4 class="timeline-title">Visionary Initiative</h4>
                  <p class="timeline-text">
                    Established under the <span class="highlight-primary">Career Development Cell (CDC)</span> at NIT Raipur, recognizing the growing need for entrepreneurial mindset among engineering students.
                  </p>
                </div>
              </div>
            </div>

            <!-- Timeline Item 2 -->
            <div class="timeline-item">
              <div class="timeline-marker">
                <div class="marker-circle marker-accent">
                  <span class="marker-number">2</span>
                </div>
                <div class="marker-line"></div>
              </div>
              <div class="timeline-content">
                <div class="timeline-card">
                  <h4 class="timeline-title">Network Expansion</h4>
                  <p class="timeline-text">
                    Successfully expanded networks across <span class="highlight-accent">Chhattisgarh and India</span>, establishing links with organizations, angel investors, and accomplished entrepreneurs.
                  </p>
                </div>
              </div>
            </div>

            <!-- Timeline Item 3 -->
            <div class="timeline-item">
              <div class="timeline-marker">
                <div class="marker-circle marker-secondary">
                  <span class="marker-number">3</span>
                </div>
              </div>
              <div class="timeline-content">
                <div class="timeline-card">
                  <h4 class="timeline-title">Powerhouse of Innovation</h4>
                  <p class="timeline-text">
                    Under <span class="highlight-secondary">Dr. Samir Bajpai's</span> guidance, evolved into an innovation hub where students transform ideas into viable business ventures.
                  </p>
                </div>
              </div>
            </div>

            <!-- Quick Stats -->
            <div class="quick-stats">
              <div class="quick-stat stat-primary-bg">
                <div class="quick-stat-number">SEED</div>
                <div class="quick-stat-label">FUNDING ACCESS</div>
              </div>
              <div class="quick-stat stat-accent-bg">
                <div class="quick-stat-number">MENTOR</div>
                <div class="quick-stat-label">PROGRAMS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Vision and Aim Section -->
      <div class="vision-section">
        <div class="section-header">
          <h3 class="section-title">
            VISION & <span class="gradient-text">AIM</span>
          </h3>
          <p class="section-subtitle">
            Leaders Beyond Borders - Nurturing innovative ideas and building a perennial startup culture
          </p>
        </div>
        
        <div class="vision-cards">
          <!-- Vision Card -->
          <div class="animated-gradient-card">
            <div class="gradient-card-content">
              <div class="card-header">
                <div class="header-icon icon-primary">
                  <span>🎯</span>
                </div>
                <h4 class="card-heading">VISION</h4>
              </div>
              
              <div class="card-body">
                <p>
                  Striding forward carrying the motto of <span class="highlight-primary">'Leaders Beyond Borders'</span>, we at the Entrepreneurship Cell, NIT Raipur, aim to give a milieu to nurture innovative ideas.
                </p>
                <p>
                  E-Summit'24 would be a perfect conglomerate - notion of Entrepreneurship, Management and Quizzing to bring out the innovator within oneself.
                </p>
                <p>
                  E-Summit provides a platform for aspiring entrepreneurs to interact with some of the alpha geeks in the forte and budding entrepreneurs acquainted with the assets and liabilities in this field so that their actions don't go futile.
                </p>
              </div>
              
              <div class="card-footer">
                <p class="footer-text">LEADERS BEYOND BORDERS</p>
              </div>
            </div>
          </div>

          <!-- Aim Card -->
          <div class="animated-gradient-card">
            <div class="gradient-card-content">
              <div class="card-header">
                <div class="header-icon icon-accent">
                  <span>🚀</span>
                </div>
                <h4 class="card-heading">AIM</h4>
              </div>
              
              <div class="card-body">
                <p>
                  We would ensure that the ideas don't just thrive but become the greatest revelations of the country.
                </p>
                <p>
                  E-Summit'24 will aim at laying a <span class="highlight-accent">foundation stone for developing a perennial start-up culture</span> that would surely inspire society to grow and progress.
                </p>
                <p>
                  We provide the required guidance and get the budding entrepreneurs acquainted with the assets and liabilities in this field, ensuring their actions lead to meaningful impact.
                </p>
              </div>
              
              <div class="card-footer">
                <p class="footer-text">PERENNIAL STARTUP CULTURE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline Section -->
      <div class="main-timeline-section">
        <div class="section-header">
          <h3 class="section-title">
            OUR <span class="gradient-text">TIMELINE</span>
          </h3>
          <p class="section-subtitle">
            A journey of innovation, growth, and entrepreneurial excellence since 2010
          </p>
        </div>

        <div class="timeline-wrapper">
          <!-- Vertical Timeline Line -->
          <div class="timeline-line"></div>

          <div class="timeline-items">
            <!-- 2010 -->
            <div class="main-timeline-item timeline-left">
              <div class="timeline-node">
                <div class="node-circle node-primary">
                  <span class="node-icon">🌱</span>
                </div>
                <div class="node-glow"></div>
              </div>
              <div class="timeline-card-wrapper">
                <div class="main-timeline-card card-primary">
                  <div class="card-gradient-overlay"></div>
                  <div class="card-content-inner">
                    <div class="year-badge badge-primary">
                      <span class="badge-dot"></span>
                      2010
                    </div>
                    <h4 class="timeline-card-title">The Beginning</h4>
                    <p class="timeline-card-text">
                      E-Cell NIT Raipur was established under the Career Development Cell, marking the start of our entrepreneurial journey. A small team with big dreams began nurturing the startup culture.
                    </p>
                    <div class="decorative-line line-primary"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2015 -->
            <div class="main-timeline-item timeline-right">
              <div class="timeline-node">
                <div class="node-circle node-accent">
                  <span class="node-icon">🎪</span>
                </div>
                <div class="node-glow"></div>
              </div>
              <div class="timeline-card-wrapper">
                <div class="main-timeline-card card-accent">
                  <div class="card-gradient-overlay"></div>
                  <div class="card-content-inner">
                    <div class="year-badge badge-accent">
                      <span class="badge-dot"></span>
                      2015
                    </div>
                    <h4 class="timeline-card-title">First E-Summit</h4>
                    <p class="timeline-card-text">
                      Launched our flagship event E-Summit, bringing together entrepreneurs, investors, and students. The event became a catalyst for startup culture in Central India.
                    </p>
                    <div class="decorative-line line-accent"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2018 -->
            <div class="main-timeline-item timeline-left">
              <div class="timeline-node">
                <div class="node-circle node-secondary">
                  <span class="node-icon">🌍</span>
                </div>
                <div class="node-glow"></div>
              </div>
              <div class="timeline-card-wrapper">
                <div class="main-timeline-card card-secondary">
                  <div class="card-gradient-overlay"></div>
                  <div class="card-content-inner">
                    <div class="year-badge badge-secondary">
                      <span class="badge-dot"></span>
                      2018
                    </div>
                    <h4 class="timeline-card-title">Network Expansion</h4>
                    <p class="timeline-card-text">
                      Successfully expanded our network across India, establishing partnerships with angel investors, VCs, and accomplished entrepreneurs. Our reach extended beyond Chhattisgarh.
                    </p>
                    <div class="decorative-line line-secondary"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2020 -->
            <div class="main-timeline-item timeline-right">
              <div class="timeline-node">
                <div class="node-circle node-primary">
                  <span class="node-icon">💻</span>
                </div>
                <div class="node-glow"></div>
              </div>
              <div class="timeline-card-wrapper">
                <div class="main-timeline-card card-primary">
                  <div class="card-gradient-overlay"></div>
                  <div class="card-content-inner">
                    <div class="year-badge badge-primary">
                      <span class="badge-dot"></span>
                      2020
                    </div>
                    <h4 class="timeline-card-title">Digital Transformation</h4>
                    <p class="timeline-card-text">
                      Adapted to the new normal by taking our events and mentorship programs online, reaching a wider audience and maintaining our commitment to entrepreneurship during challenging times.
                    </p>
                    <div class="decorative-line line-primary"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2023 -->
            <div class="main-timeline-item timeline-left">
              <div class="timeline-node">
                <div class="node-circle node-accent">
                  <span class="node-icon">🏢</span>
                </div>
                <div class="node-glow"></div>
              </div>
              <div class="timeline-card-wrapper">
                <div class="main-timeline-card card-accent">
                  <div class="card-gradient-overlay"></div>
                  <div class="card-content-inner">
                    <div class="year-badge badge-accent">
                      <span class="badge-dot"></span>
                      2023
                    </div>
                    <h4 class="timeline-card-title">Incubation Center</h4>
                    <p class="timeline-card-text">
                      Established state-of-the-art incubation facilities with co-working spaces, mentorship programs, and seed funding opportunities. 10+ startups incubated with ₹50L+ funding raised.
                    </p>
                    <div class="decorative-line line-accent"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2024 -->
            <div class="main-timeline-item timeline-right">
              <div class="timeline-node">
                <div class="node-circle node-secondary">
                  <span class="node-icon">🚀</span>
                </div>
                <div class="node-glow"></div>
              </div>
              <div class="timeline-card-wrapper">
                <div class="main-timeline-card card-secondary">
                  <div class="card-gradient-overlay"></div>
                  <div class="card-content-inner">
                    <div class="year-badge badge-secondary">
                      <span class="badge-dot"></span>
                      2024
                    </div>
                    <h4 class="timeline-card-title">E-Summit Excellence</h4>
                    <p class="timeline-card-text">
                      Organized the largest E-Summit in NIT Raipur history with 1500+ participants, 50+ speakers from unicorn startups, and ₹10L+ prize pool. A landmark achievement in our journey.
                    </p>
                    <div class="decorative-line line-secondary"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2025 -->
            <div class="main-timeline-item timeline-left">
              <div class="timeline-node">
                <div class="node-circle node-primary">
                  <span class="node-icon">⭐</span>
                </div>
                <div class="node-glow"></div>
              </div>
              <div class="timeline-card-wrapper">
                <div class="main-timeline-card card-primary">
                  <div class="card-gradient-overlay"></div>
                  <div class="card-content-inner">
                    <div class="year-badge badge-primary">
                      <span class="badge-dot"></span>
                      2025
                    </div>
                    <h4 class="timeline-card-title">Future Forward</h4>
                    <p class="timeline-card-text">
                      Continuing our mission of 'Leaders Beyond Borders', expanding our incubation programs, and building a perennial startup culture that inspires the next generation of entrepreneurs.
                    </p>
                    <div class="decorative-line line-primary"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline End Marker -->
          <div class="timeline-end">
            <div class="end-marker">
              <span class="end-icon">✨</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="cta-section">
        <h3 class="cta-title">
          JOIN THE <span class="gradient-text">ENTREPRENEURIAL REVOLUTION</span>
        </h3>
        <p class="cta-text">
          Be part of NIT Raipur's thriving startup ecosystem. Transform your ideas into reality with our support, mentorship, and resources.
        </p>
        <div class="cta-buttons">
          <button class="btn btn-primary">GET INVOLVED</button>
          <button class="btn btn-secondary">LEARN MORE</button>
        </div>
      </div>
    </div>
  `;
  
  return section;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAboutECell);
} else {
  initAboutECell();
}

function initAboutECell() {
  const targetElement = document.getElementById('about-ecell-root');
  if (targetElement) {
    const aboutSection = createAboutECell();
    targetElement.appendChild(aboutSection);
  }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createAboutECell, initAboutECell };
}
