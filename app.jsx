import React from 'react';
import { 
  ExternalLink, 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  Building2, 
  MessageSquare 
} from 'lucide-react';

function App() {
  // Configuração dos Links Principais
  const links = [
    {
      title: "Frequência",
      description: "Acesse o sistema de registro de ponto e frequência.",
      url: "https://www.ufpe.br", // Substitua pelo link real
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      color: "hover:border-blue-500/50 hover:shadow-blue-500/20"
    },
    {
      title: "PGD UFPE",
      description: "Portal do Programa de Gestão e Desempenho.",
      url: "https://www.ufpe.br", // Substitua pelo link real
      icon: <Building2 className="w-8 h-8 text-emerald-400" />,
      color: "hover:border-emerald-500/50 hover:shadow-emerald-500/20"
    },
    {
      title: "Chat PGD",
      description: "Canal direto para tirar dúvidas e suporte.",
      url: "https://www.ufpe.br", // Substitua pelo link real
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      color: "hover:border-purple-500/50 hover:shadow-purple-500/20"
    }
  ];

  // Configuração dos Contatos
  const contacts = [
    {
      label: "(81) 2126-8039",
      href: "tel:+558121268039",
      icon: <Phone size={20} />,
      type: "Telefone"
    },
    {
      label: "Whatsapp",
      href: "https://wa.me/558121268039?text=Olá, gostaria de falar sobre o PGD.",
      icon: <MessageCircle size={20} />,
      type: "Whatsapp"
    },
    {
      label: "Email",
      href: "mailto:contato@ufpe.br", // Substitua pelo email real
      icon: <Mail size={20} />,
      type: "Email"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 text-white flex flex-col items-center justify-center p-4">
      
      {/* Container Principal */}
      <div className="max-w-4xl w-full space-y-12 animate-fade-in-up">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Portal PGD
          </h1>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            Central de acesso rápido aos serviços e canais de comunicação da UFPE.
          </p>
        </div>

        {/* Grid de Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-6 bg-slate-900/50 border border-slate-800 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${link.color}`}
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={16} className="text-slate-500" />
              </div>
              <div className="mb-4 p-3 bg-slate-950 rounded-xl w-fit border border-slate-800">
                {link.icon}
              </div>
              <h2 className="text-xl font-semibold mb-2 text-slate-100">{link.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                {link.description}
              </p>
            </a>
          ))}
        </div>

        {/* Rodapé de Contato */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.type === 'Whatsapp' || contact.type === 'Email' ? '_blank' : '_self'}
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all duration-300"
              >
                {contact.icon}
                <span className="font-medium">{contact.label}</span>
              </a>
            ))}
          </div>
          <p className="text-center text-slate-600 text-sm mt-8">
            © {new Date().getFullYear()} UFPE - Todos os direitos reservados.
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
