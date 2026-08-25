import './Content.css';
import '../../App.css';
function Downloads(){
    return (
        <section className='Downloads'>
            <h2 className='TitleTxt'>DOWNLOADS</h2>
            <hr/>
            <p>Download documents or project files here.</p>
            <table className="downloadTable">
                <tr className='tableHead'>
                    <th>File</th>
                    <th>Filename</th>
                    <th>Last Updated</th>
                    <th></th>
                </tr>
                <tr className='tableRow'>
                    <td>Resume</td>
                    <td><i>Andrew_S_Tagawa_Resumev8.pdf</i></td>
                    <td>2026/08/06</td>
                    <td><a className='tableDownload' href="https://drive.google.com/uc?export=download&id=1ZhNyfuFXgLNxmdgozVlBLbCx6k4BkDlp">Download</a></td>
                </tr>
            </table>
        </section>
    );
}

export default Downloads;