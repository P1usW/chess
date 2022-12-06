import '../../App.css';

const NewModal = ({active, setActive}) => {

    return (
        <div className={active.activeModal ? 'modal active' : 'modal'}
             onClick={event => {
                 if (event.target !== event.currentTarget) {
                     return false;
                 }
                 setActive(false);
             }}>
            <div className={active.activeModal ? 'modal-content active' : 'modal-content'}>
                {active?.player} проиграл
            </div>
        </div>
    );
};

export default NewModal;