import './Team.css';
import teamImg from '../../../../assets/images/Rectangle 54 (1).png';
function Team() {
  return (
    <section>
      <div className="Team__wrapper utility--flex">
        <div className="Team__wrapper--left util__textbox">
          <h1 className="utility__heading">
            Manage your team and back office.
          </h1>
          <p className="utility__summary">
            Our back office solutions simplify management of multiple business
            branches and team access levels, while providing mini in-house
            management tools for day-to-day business activities.
          </p>
          <a href="#">See our commerce solutions.</a>
        </div>
        <div className="Team__wrapper--right">
          <img src={teamImg} alt="A boy checking out a CD disk" />
        </div>
      </div>
    </section>
  );
}

export default Team;
