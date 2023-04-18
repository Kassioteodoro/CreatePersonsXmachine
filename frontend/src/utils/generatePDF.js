import jsPDF from 'jspdf'

var doc = new jsPDF();

const generatePDF = (
  imagem,nome, raca, idade, vida, XP,
  magia, forca, habilidade, resistencia,
  armadura, inteligencia, historia, habilidades,
  magias, vantagens, desvantagens, equipamentos
) => {
doc.setFontSize(40);
doc.text("Create Person Xmachine", 25, 25);
doc.setFontSize(25);
doc.text("Nome:", 20, 50);
doc.text(nome, 48, 50);
doc.text("Raça:", 20, 60);
doc.text(raca, 45, 60);
doc.text("Idade:", 20, 70);
doc.text(idade.toString(), 47, 70);
doc.text("Vida:", 20, 80);
doc.text(vida.toString(), 42, 80);
doc.text("XP:", 20, 90);
doc.text(XP.toString(), 36, 90);
doc.text("Força:", 20, 110);
doc.text(forca.toString(), 47, 110);
doc.text("Magia:", 20, 120);
doc.text(magia.toString(), 48, 120);
doc.text("Habilidade:", 20, 130);
doc.text(habilidade.toString(), 66, 130);
doc.text("Inteligencia:", 20, 140);
doc.text(inteligencia.toString(), 68, 140);
doc.text("Armadura:", 20, 150);
doc.text(armadura.toString(), 63, 150);
doc.text("Resistencia:", 20, 160);
doc.text(resistencia.toString(), 70, 160);
doc.addImage(imagem, "JPEG", 100, 40, 100, 120);
doc.text("historia:", 10, 180);
doc.setFontSize(18);
doc.text(historia, 15, 190);
// doc.text("aaaaaaaaaaaaaaaaaa40", 15, 200);
// doc.text("aaaaaaaaaaaaaaaaaa60", 15, 210);
doc.setFontSize(25);
doc.text("Habilidades:", 10, 220);
doc.setFontSize(18);
doc.text(habilidades.join(', '), 15, 230);
// doc.text("aaaaaaaaaaaaaaaaaa40", 15, 240);
// doc.text("aaaaaaaaaaaaaaaaaa60", 15, 250);
doc.setFontSize(25);
doc.text("Magias:", 10, 260);
doc.setFontSize(18);
doc.text(magias.join(', '), 15, 270);
// doc.text("aaaaaaaaaaaaaaaaaa40", 15, 280);
// doc.text("aaaaaaaaaaaaaaaaaa60", 15, 290);
doc.setFontSize(25);
doc.text("Vantagens:", 110, 180);
doc.setFontSize(18);
doc.text(vantagens.join(', '), 115, 190);
// doc.text("aaaaaaaaaaaaaaaaaa40", 115, 200);
// doc.text("aaaaaaaaaaaaaaaaaa60", 115, 210);
doc.setFontSize(25);
doc.text("Desvantagens:", 110, 220);
doc.setFontSize(18);
doc.text(desvantagens.join(', '), 115, 230);
// doc.text("aaaaaaaaaaaaaaaaaa40", 115, 240);
// doc.text("aaaaaaaaaaaaaaaaaa60", 115, 250);
doc.setFontSize(25);
doc.text("Equipamentos:", 110, 260);
doc.setFontSize(18);
doc.text(equipamentos.join(', '), 115, 270);
// doc.text("aaaaaaaaaaaaaaaaaa40", 115, 280);
// doc.text("aaaaaaaaaaaaaaaaaa60", 115, 290);
doc.save(`${nome}.pdf`);
}

export default generatePDF