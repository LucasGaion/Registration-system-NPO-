const createForm = async (parent, args, context, info) => {
    try {
      // Validate input
      if (!args.input.tempoEstudo || !args.input.nivelCloud) {
        throw new Error("Required fields are missing");
      }
  
      // Additional validation logic here
  
      // Database operation
      const form = await context.db.createForm({
        data: {
          areaAtuacao: args.input.areaAtuacao,
          conhecimentoAws: args.input.conhecimentoAws,
          conhecimentoArmazenamento: args.input.conhecimentoArmazenamento,
          conhecimentoIAM: args.input.conhecimentoIAM,
          conhecimentoLinux: args.input.conhecimentoLinux,
          conhecimentoRedes: args.input.conhecimentoRedes,
          conhecimentoSeguranca: args.input.conhecimentoSeguranca,
          conhecimentoVirtualizacao: args.input.conhecimentoVirtualizacao,
          conhecimentoWindows: args.input.conhecimentoWindows,
          tempoEstudo: args.input.tempoEstudo,
          nivelCloud: args.input.nivelCloud,
        },
      });
  
      return form;
    } catch (error) {
      console.error("Error creating form:", error);
      throw new Error("Runtime Error: " + error.message);
    }
  };
  