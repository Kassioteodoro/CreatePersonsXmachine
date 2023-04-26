import jsPDF from 'jspdf'

var doc = new jsPDF();

const generatePDF = (
  imagem,nome, raca, idade, vida, XP,
  magia, forca, habilidade, resistencia,
  armadura, inteligencia, historia, habilidades,
  magias, vantagens, desvantagens, equipamentos
) => {

  let historiaPage = 190
  let habilidadesPage = 230
  let magiasPage = 270
  let vantagensPage = 190
  let desvantagensPage = 230
  let equipamentosPage = 270

  const divisorTexto = (array) => {
    const valueReturn = []
    for (var i = 0; i < array.length; i = i + 3) {
      valueReturn.push(array.slice(i, i + 3));
    }
    return valueReturn
  }
  
doc.setFontSize(40);
doc.text("Create Person Xmachine", 25, 25);
doc.setFontSize(25);
doc.text("Name:", 20, 50);
doc.text(nome, 48, 50);
doc.text("Race:", 20, 60);
doc.text(raca, 45, 60);
doc.text("Age:", 20, 70);
doc.text(idade.toString(), 40, 70);
doc.text("Life:", 20, 80);
doc.text(vida.toString(), 40, 80);
doc.text("XP:", 20, 90);
doc.text(XP.toString(), 36, 90);
doc.text("Strength:", 20, 110);
doc.text(forca.toString(), 56, 110);
doc.text("Magic:", 20, 120);
doc.text(magia.toString(), 48, 120);
doc.text("Ability:", 20, 130);
doc.text(habilidade.toString(), 48, 130);
doc.text("Intelection:", 20, 140);
doc.text(inteligencia.toString(), 65, 140);
doc.text("Armor:", 20, 150);
doc.text(armadura.toString(), 48, 150);
doc.text("Resistency:", 20, 160);
doc.text(resistencia.toString(), 68, 160);
doc.addImage(imagem, "JPEG", 100, 40, 100, 120);
doc.text("History:", 10, 180);
doc.setFontSize(18);
const historiaList = historia.match(/.{1,28}/g)
for (let int = 0; int < historiaList.length; int++) {
  doc.text(historiaList[int], 5, historiaPage);
  historiaPage += 10;
}
doc.setFontSize(25);
doc.text("Skills:", 10, 220);
doc.setFontSize(18);
const habilidadeslist = divisorTexto(habilidades)
for (let int = 0; int < habilidadeslist.length; int++) {
  doc.text(habilidadeslist[int].join(', '), 5, habilidadesPage);
  habilidadesPage += 10;
}
doc.setFontSize(25);
doc.text("MagicSkills:", 10, 260);
doc.setFontSize(18);
const magiaslist = divisorTexto(magias)
for (let int = 0; int < magiaslist.length; int++) {
  doc.text(magiaslist[int].join(', '), 5, magiasPage);
  magiasPage += 10;
}
doc.setFontSize(25);
doc.text("Benefits:", 110, 180);
doc.setFontSize(18);
const vantagenslist = divisorTexto(vantagens)
for (let int = 0; int < vantagenslist.length; int++) {
  doc.text(vantagenslist[int].join(', '),115, vantagensPage);
  vantagensPage += 10;
}
doc.setFontSize(25);
doc.text("Disadvantage:", 110, 220);
doc.setFontSize(18);
const desvantagenslist = divisorTexto(desvantagens)
for (let int = 0; int < desvantagenslist.length; int++) {
  doc.text(desvantagenslist[int].join(', '), 115, desvantagensPage);
  desvantagensPage += 10;
}
doc.setFontSize(25);
doc.text("Equipment:", 110, 260);
doc.setFontSize(18);
const equipamentoslist = divisorTexto(equipamentos)
for (let int = 0; int < equipamentoslist.length; int++) {
  doc.text(equipamentoslist[int].join(', '), 115, equipamentosPage);
  equipamentosPage += 10;
}
doc.save(`${nome}.pdf`);
}

export default generatePDF