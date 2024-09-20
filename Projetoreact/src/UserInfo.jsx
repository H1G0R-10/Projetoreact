function Comment(props){
return(
    <div className="Comment">
        <div className="UserInfo">
            <Avatar user={props.athor}/>
            <div className="UserInfo-name">
                {props.athor.name}
                </div>
                </div>

                <div className="Comment-text">
                    {props.text}
                    </div>
            <div className="Comment-date">
                {formaDate(props.date)}
                </div>
                </div>
);
}