'use client';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ServiceTemplateEditor from '../comp/ServiceEditTemplate';

export default function EditorPage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ServiceTemplateEditor />
    </DndProvider>
  );
}
