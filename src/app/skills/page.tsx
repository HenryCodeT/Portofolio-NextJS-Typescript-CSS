const Skills = () => {
  return (
    <section className="section">
      <span className="section__subtitle">My Abilities</span>
      <h2 className="section__title">My Experience</h2>
      <div className="skills__container grid">
        <div className="skills__content">
          <h3 className="skills__title">Frontend Development</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>

                <div>
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>

                <div>
                  <h3 className="skills__name">CSS | SCSS</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>

                <div>
                  <h3 className="skills__name">Javascript</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

            </div>
            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>

                <div>
                  <h3 className="skills__name">Bootstrap</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>

                <div>
                  <h3 className="skills__name">Tailwind</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>

                <div>
                  <h3 className="skills__name">React | Next </h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="skills__content">
          <h3 className="skills__title">Backend Development</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>

                <div>
                  <h3 className="skills__name">Node JS | Express</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>

                <div>
                  <h3 className="skills__name">Java | Spring Booot</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>

                <div>
                  <h3 className="skills__name">SQL</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

            </div>
            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>

                <div>
                  <h3 className="skills__name"> AWS - EC2</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>

                <div>
                  <h3 className="skills__name">Firebase | Supabase</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>

                <div>
                  <h3 className="skills__name">Mongo DB</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Skills;