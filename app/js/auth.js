(function(){
  const PIN = (window.TESOURA_CONFIG && window.TESOURA_CONFIG.APP_PIN) || "TESOURA2026";

  function askPin(){
    const p = prompt("Digite o PIN do TESOURA:");
    if (!p) return false;
    if (p.trim() !== PIN){
      alert("PIN errado.");
      return false;
    }
    sessionStorage.setItem("TESOURA_OK", "1");
    return true;
  }

  window.TESOURA_AUTH = {
    ensure(){
      if (sessionStorage.getItem("TESOURA_OK")==="1") return true;
      return askPin();
    }
  };
})();

