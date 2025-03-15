import React from 'react';
import { hiddenStems } from '~/data/stems';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";

const StemsTable: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 overflow-x-auto">
      <h2 className="text-2xl font-bold text-center mb-4">지장간 표</h2>

      <Table className="border rounded-lg shadow-md w-full">
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="text-center font-bold">구분</TableHead>
            {Object.keys(hiddenStems).map((branch) => (
              <TableHead key={branch} className="text-center font-bold">{branch}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-gray-50">
            <TableCell className="text-center font-bold">초기</TableCell>
            {Object.entries(hiddenStems).map(([_, { initial }]) => (
              <TableCell key={initial} className="text-center">{initial}</TableCell>
            ))}
          </TableRow>
          <TableRow className="hover:bg-gray-50">
            <TableCell className="text-center font-bold">중기</TableCell>
            {Object.entries(hiddenStems).map(([_, { middle }]) => (
              <TableCell key={middle} className="text-center">{middle || '-'}</TableCell>
            ))}
          </TableRow>
          <TableRow className="hover:bg-gray-50">
            <TableCell className="text-center font-bold">여기</TableCell>
            {Object.entries(hiddenStems).map(([_, { final }]) => (
              <TableCell key={final} className="text-center">{final}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default StemsTable;
