import { create } from 'zustand';

interface Annotation {
    id: string;
    type: 'highlight' | 'underline' | 'comment' | 'signature';
    page: number;
    position: { x: number; y: number };
    content: string;
    color?: string;
};

interface AnnotationState{
    pdfFile: File | null;
    annotations: Annotation[];
    currentTool: Annotation['type'] | null;
    selectedColor: string;
    setPdfFile: (file: File) => void;
    addAnnotation: (annotation: Omit<Annotation, 'id'>) => void;
    setCurrentTool: (tool: Annotation['type'] | null) => void;
    setColor: (color: string) => void;
};

export const useAnnotationState = create<AnnotationState>((set) => ({
    pdfFile: null,
    annotations: [],
    currentTool: null,
    selectedColor: '#ffff00',
    setPdfFile: (file) => set({ pdfFile: file }),
    addAnnotation: (annotation) => 
        set((state) => ({ annotations: [...state.annotations, { ...annotation, id: crypto.randomUUID() }] })),
    setCurrentTool: (tool) => set({ currentTool: tool }),
    setColor: (color) => set({ selectedColor: color }),
}))