function Umamusume(props) {
  return (
    <div>
      <div>
        <img className="rounded-xl bg-white" src={`${process.env.PUBLIC_URL}/images/umamusume/${props.id}.png`} alt={props.id}></img>
      </div>
      <div className="flex justify-center mt-4 rounded-xl bg-white">{props.name}</div>
    </div>
  );
}

export default Umamusume;
